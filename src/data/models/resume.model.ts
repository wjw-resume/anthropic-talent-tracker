import {ResumeExperience} from "./ResumeExperience";

export interface Resume {
	name: string;
	githubUrl: string;
	linkedinUrl: string;

	languageSkills: string[];
	techSkills: string[];

	workExperiences: ResumeExperience[];
	educationExperiences: ResumeExperience[];
}
