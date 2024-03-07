/* depending on frequency of application question changes, would
consider trade-offs between hard-coding and developing a dynamic
form */
export interface Application {
	applicationId: number;
	applicantId: number;
	roleId: number;

	remoteLocation: string;

	resume: string;

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
