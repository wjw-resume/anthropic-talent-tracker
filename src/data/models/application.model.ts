/* depending on frequency of application question changes, would
consider trade-offs between hard-coding and developing a dynamic
form */
import {Resume} from "./resume.model";
import {Applicant} from "./applicant.model";
import {ApplicationStatus} from "../enums/applicationStatus";
import {DateTime} from "luxon";

export interface Application {
	applicationId: number;
	applicationStatus: ApplicationStatus;
	applicationDate: DateTime;

	applicantId: number;
	applicant: Applicant;

	roleId: number;

	remoteLocation: string;

	resume: Resume;
	resumeUrl: string;

	currentLocation: string | null;
	currentCompany: string | null;

	linkedinUrl: string | null;
	publicationsUrl: string | null;
	githubUrl: string | null;
	websiteUrl: string | null;

	legallyAuthorized: boolean;
	visaRequired: boolean;

	inPersonOkay: boolean;

	earliestStart: string | null;
	deadlines: string | null;

	aiPolicyAcknowledged: boolean;

	relocationLocations: string[];

	whyAnthropic: string;
	meaningfulParagraph: string;

	namePronunciation: string | null;

	additionalInfo: string | null;

	demographicLocation: string;
}
