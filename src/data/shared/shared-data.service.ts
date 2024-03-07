import {Injectable} from '@angular/core';
import {Applicant} from "../models/applicant.model";
import {Application} from "../models/application.model";
import {Role} from "../models/role.model";
import {DateTime} from "luxon";

@Injectable({
	providedIn: 'root'
})
export class SharedDataService {
	applications: Application[] = [
		{
			applicationId: 1,
			applicantId: 1,
			roleId: 1,
			remoteLocation: "San Francisco, CA",
			additionalInfo: null,
			aiPolicyAcknowledged: true,
			currentCompany: "Superior Court of California, County of Santa Clara",
			currentLocation: "Union City, CA",
			deadlines: "None at this time",
			demographicLocation: "United States",
			earliestStart: "Approximately two weeks from offer date",
			githubUrl: "https://www.github.com/ww2406",
			inPersonOkay: true,
			legallyAuthorized: true,
			linkedinUrl: "https://www.linkedin.com/in/william-welch-364b246a/",
			meaningfulParagraph: "",
			namePronunciation: null,
			publicationsUrl: "https://scholar.google.com/citations?hl=en&user=uEhJ3kcAAAAJ",
			relocationLocations: ["No. I am open to hybrid roles, but not roles that require relocation."],
			visaRequired: false,
			websiteUrl: null,
			whyAnthropic: "Why do I want to work for Anthropic? Truthfully, Anthropic is the first private company I’ve been excited about the idea of working for since Sun Microsystems was acquired by Oracle. As a child and teenager, I learned the foundations of almost everything I know about technology from Sun’s software. The idea that a company would let someone like me, a 12-year-old child of a single mom on welfare, download and learn their software for free really spoke to me. Not feeling passionate about other companies, instead of going to school for computer science, I became very interested in public policy, and found my way back to technology and purpose in public sector technology. <br /> I feel this same wonder and excitement today for Anthropic. Companies who want to make money off of AI at any cost are a dime a dozen, and I’d rather be living in an apartment on a government salary than buy a mansion doing work that might harm lots of people. Anthropic seems to be different. From my own experiences using (and preferring) Claude to the lack of stories about Claude’s failures relative to other models, it’s clear to me that Anthropic’s public benefit status has truly allowed it to prioritize what’s right over pure profits. Doing what’s right while improving society is my passion and I would be really proud to say, \"I’m an internal applications engineer for Anthropic.\"",
			resume: ""
		}
	];

	applicants: Applicant[] = [
		{
			applicantId: 1,
			email: "Please see my application",
			phone: "Please see my application",
			firstName: "William",
			lastName: "Welch",
			pronouns: "he/him",
			applications: [this.applications[0]]
		}
	];

	roles: Role[] = [
		new Role({
			roleId: 1,
			roleName: "Senior Software Engineer, Corporate Engineering",
			openDate: DateTime.fromISO('2024-03-07'),
			closeDate: DateTime.now(),
			applications: [this.applications[0]]
		})
	];

	constructor() {
	}
}
