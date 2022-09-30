import bcrypt from 'bcryptjs'
import { CustomError } from '../../../../errors/CustomError';

import { ICreateUser, IUserRepository } from "../../repositories/IUserRepository";

export class InsertUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute({ email, first_name, last_name, password }: ICreateUser) {
		const userAlreadyExists = await this.userRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new CustomError(409, 'User already exists!');
		}

		const password_hashed = await bcrypt.hash(password, Number(process.env.SALT_ROUND))

		const newUser = await this.userRepository.insert({ email, first_name, last_name, password: password_hashed })

		return newUser
	}
}