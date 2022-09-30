import 'express-async-errors';
import { env } from 'process';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';

import { CustomError } from './errors/CustomError';
import { router } from './routes';

dotenv.config()

const port = env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof CustomError) {
		return res.status(error.statusCode).json({
			error: error.message,
		});
	}

	return res.json({
		error: error.message,
	});
});


app.listen(Number(port), () => {
	console.log(`Server is running in port ${port}`);
});
