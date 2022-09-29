import { CustomError } from "../../../../errors/CustomError";
import { IUserRepository } from "../../repositories/IUserRepository";

export class InactivateUserUseCase {
	constructor(private userRepository: IUserRepository) { }

	async execute(id: string) {
		const userExists = await this.userRepository.findById(id);

		if (!userExists) {
			throw new CustomError(404, "User not found!");
		}

		const user = await this.userRepository.Inactivate(id);

		return user;
	}
}