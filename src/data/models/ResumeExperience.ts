import {ResumePosition} from "./ResumePosition.model";
import {DateTime} from "luxon";

export interface ResumeExperience {
	experienceName: string;
	positions: ResumePosition[];
	startDate: DateTime;
	endDate: DateTime | null;
	text: string | null;
}
