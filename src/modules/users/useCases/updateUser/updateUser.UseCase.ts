import { CustomError } from "../../../../errors/CustomError";
import { IUserRepository, IUserUpdate } from "../../repositories/IUserRepository";

export class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) { }
	async execute(user: IUserUpdate) {

		const userExists = await this.userRepository.findById(user.id);

		if (!userExists) {
			throw new CustomError(404, "User not found!")
		}

		const userUpdated = await this.userRepository.update(user)

		return userUpdated
	}
}