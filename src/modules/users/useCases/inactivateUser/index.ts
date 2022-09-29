import { UserRepository } from "../../repositories/implementations/UserRepository";
import { InactivateUserController } from "./inactivateUser.Controller";
import { InactivateUserUseCase } from "./inactivateUser.UseCase";

const userRepository = new UserRepository()

const inactivateUserUseCase = new InactivateUserUseCase(userRepository)

export const inactivateUserController = new InactivateUserController(inactivateUserUseCase)