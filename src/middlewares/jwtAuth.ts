import type { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import { env } from 'process'

import { CustomError } from '../errors/CustomError';

export async function jwtAuth(req: Request, res: Response, next: NextFunction) {
	const accessToken = req.headers.authorization!;

	const response = await axios.get(`${env.AUTH_BASE_URL}/auth/validate`, {
		headers: {
			authorization: accessToken,
		},
	})
		.catch(error => {
			throw new CustomError(error.response.status, error.response.data.error);
		});

	const userEmail = response.data;

	res.set({ userEmail });

	next();
}
