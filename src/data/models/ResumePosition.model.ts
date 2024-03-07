import {DateTime} from "luxon";

export interface ResumePosition {
	positionTitle: string;
	startDate: DateTime | null;
	endDate: DateTime | null;
}
