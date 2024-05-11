import { ProducerStatus, Roles } from "@/types/enums";
import { AppBases } from "./base";

export interface UserKyc {
	id?: number;
	userKyc: boolean;
	mobileKyc: boolean;
	googleKyc: boolean;
	emailKyc: boolean;
	producerKyc: ProducerStatus;
}

export interface UserProfile {
	id: number;
	firstName: string;
	lastName: string;
	nickname: string;
	mobileNumber: string;
	age: number;
	gender: AppBases;
	expertise: AppBases[];
	skills: AppBases[];
	favorites: AppBases[];
}

export interface IUser {
	id: number;
	username: string;
	email: string;
	token?: string;
	role: Roles;
	kyc: UserKyc;
	profile: UserProfile;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}
