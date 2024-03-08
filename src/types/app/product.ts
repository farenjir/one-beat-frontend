import { ProductLevel, ProductStatus } from "../enums";
import { IUser } from "./user";

export interface IProduct {
	id: number;
	faName: string;
	enName: string;
	faDescription: string;
	enDescription: string;
	coverFileName: string;
	demoFileName: string;
	genreIds: number[];
	tempoIds: number[];
	groupIds: number[];
	moodIds: number[];
	status?: ProductStatus;
	level?: ProductLevel;
	producer: Partial<IUser>;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
