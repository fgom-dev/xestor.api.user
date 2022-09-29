import { Request, Response } from "express";
import { InactivateUserUseCase } from "./inactivateUser.UseCase";

export class InactivateUserController {
	constructor(private inactivateUserUseCase: InactivateUserUseCase) { }

	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const user = await this.inactivateUserUseCase.execute(id)

		return res.status(200).json(user)
	}
}