// hard-coding these for expediency, for a real system would wan
import {Application} from "./application.model";

export interface Applicant {
	applicantId: number;
	firstName: string;
	lastName: string;
	pronouns: string;

	email: string;
	phone: string;

	applications: Application[];
}
