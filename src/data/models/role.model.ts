import {DateTime} from "luxon";
import {Application} from "./application.model";

export interface IRole {
	roleId: number;
	roleName: string;
	openDate: DateTime;
	closeDate: DateTime;
	applications: Application[]; // doing object for expediency
}
export class Role implements IRole {
	roleId: number;
	roleName: string;

	openDate: DateTime;
	closeDate: DateTime;

	applications: Application[]; // doing object for expediency
	constructor(role: Required<IRole>) {
		this.roleId = role.roleId;
		this.roleName = role.roleName;
		this.openDate = role.openDate;
		this.closeDate = role.closeDate;
		this.applications = role.applications;
	}

	get numApplicants(): number {
		return this.applications.length;
	}
}
