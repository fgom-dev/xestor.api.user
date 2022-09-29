import { prisma } from "../../../../prisma/client";
import { ICreateUser, IUserRepository, IUserOut, IUserUpdate } from "../IUserRepository";

export class UserRepository implements IUserRepository {
	constructor(private prismaUser = prisma.user) { }

	async Inactivate(id: string): Promise<IUserOut> {
		const user = await this.prismaUser.update({
			data: {
				status: "i"
			},
			where: {
				id
			}
		})

		return user
	}

	async findById(id: string): Promise<IUserOut> {
		const user = await this.prismaUser.findUnique({
			where: {
				id
			}
		})

		return user as IUserOut
	}

	async update({ id, email, first_name, last_name }: IUserUpdate): Promise<IUserOut> {
		const user = await this.prismaUser.update({
			data: {
				email,
				first_name,
				last_name,
				updated_at: new Date(),
			},
			where: {
				id
			}
		})

		return user
	}

	async findByEmail(email: string): Promise<IUserOut> {
		const user = await this.prismaUser.findUnique({
			where: {
				email
			}
		})

		return user as IUserOut
	}

	async insert({ email, first_name, last_name, password }: ICreateUser): Promise<IUserOut> {
		const user = await this.prismaUser.create({
			data: {
				email,
				first_name,
				last_name,
				password: {
					create: {
						password
					}
				}
			}
		})

		return user
	}
}