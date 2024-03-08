import {Injectable} from '@angular/core';
import {Applicant} from "../models/applicant.model";
import {Application} from "../models/application.model";
import {Role} from "../models/role.model";
import {DateTime} from "luxon";
import {ApplicationStatus} from "../enums/applicationStatus";

@Injectable({
	providedIn: 'root'
})
export class SharedDataService {
	applicants: Applicant[] = [
		{
			applicantId: 1,
			email: "Please see my application",
			phone: "Please see my application",
			firstName: "William",
			lastName: "Welch",
			fullName: "William Welch",
			pronouns: "he/him",
			applications: []
		}
	];

	applications: Application[] = [
		{
			applicationId: 1,
			applicationStatus: ApplicationStatus.WAITING_FOR_REVIEW,
			applicationDate: DateTime.fromISO('2024-03-08').toJSDate(),
			applicantId: 1,
			applicant: this.applicants[0],
			roleId: 1,
			inPersonLocation: "San Francisco, CA",
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
			resumeUrl: "assets/Resume_Anthropic.pdf",
			resume: {
				name: "William Welch",
				githubUrl: "https://www.github.com/ww2406",
				linkedinUrl: "https://www.linkedin.com/in/william-welch-364b246a/",
				languageSkills: ["C#", "Python", "Javascript/TypeScript", "Java", "SQL", "wrote first BASIC application at age 10"],
				techSkills: ["ASP.NET Core", "EF Core", "Angular", "Git", "Azure Synapse", "SQL Server", "PowerBI", "Cordova", "Spring"],
				educationExperiences: [
					{
						experienceName: "Master of Public Administration",
						startDate: DateTime.fromISO("2016-08-01"),
						endDate: DateTime.fromISO("2019-05-01"),
						positions: [{
							positionTitle: "Ohio State University",
							startDate: null,
							endDate: null
						}],
						text: "Fully funded by University."
					},
					{
						experienceName: "Bachelor of Science, Economics & Political Science, statistics minor",
						startDate: DateTime.fromISO("2011-09-01"),
						endDate: DateTime.fromISO("2016-05-01"),
						positions: [{
							positionTitle: "Ohio State University",
							startDate: null,
							endDate: null
						}],
						text: "Full cost of attendance scholarship."
					}
				],
				workExperiences: [
					{
						experienceName: "Superior Court of California, County of Santa Clara",
						startDate: DateTime.fromISO("2023-07-01"),
						endDate: null,
						positions: [{
							positionTitle: "Senior Software Engineer",
							startDate: DateTime.fromISO("2023-07-01"),
							endDate: null
						}],
						text: `
						<ul>
							<li>
								<b>Saved clerks up to 20 hours per week</b> on manual hearing scheduling as the solution architect (n-tier),
								 project manager, business analyst, and full stack developer (C#, ASP.NET Core Web API, Angular, SQL Server, EF Core)
								 for the Santa Clara County Superior Court Reservations System. Available at <a href="https://reservations.scscourt.org" target="_blank">reservations.scscourt.org</a>.
							</li>
							<li>
								<b>Architected (n-tier) authorization solution for over 10 internal applications</b> to allow self-service access management. Developed (C#, ASP.NET Core Web API, SQL Server, EF Core) case validation service for use by the Reservations System and other applications.
							</li>
						</ul>
						`
					},
					{
						experienceName: "Ohio Department of Transportation, Central Office",
						startDate: DateTime.fromISO("2014-09-01"),
						endDate: null,
						positions: [
							{
								positionTitle: "Technical Consultant",
								startDate: DateTime.fromISO('2023-10-01'),
								endDate: null
							},
							{
								positionTitle: "Data Solutions Manager",
								startDate: DateTime.fromISO('2022-02-01'),
								endDate: DateTime.fromISO('2023-07-01')
							},
							{
								positionTitle: "Program Administrator",
								startDate: DateTime.fromISO('2019-05-01'),
								endDate: DateTime.fromISO('2022-02-01')
							},
							{
								positionTitle: "College Intern",
								startDate: DateTime.fromISO('2014-09-01'),
								endDate: DateTime.fromISO('2016-08-01')
							}
						],
						text: `
						<ul>
							<li>
								<b>Replaced disconnected legacy systems requiring 5 hours per week manual data transfer for over 200 users</b> statewide
								as solution architect (n-tier), technical lead (2 junior developers), full stack developer
								(C#, ASP.NET Core Web API, Angular, SQL Server, EF Core), and business program manager (evangelized
								 project throughout agency) for the Work Zone Management System. Data available on <a href="www.ohgo.com" target="_blank">ohgo.com</a>.
							</li>
							<li>
								<b>Saved over $280K in contract staff expenses and reduced KPI reporting lead time by 5 weeks</b> by taking over
								data warehousing initiative and migrating performance metric workflows from manual, Excel-based processes to
								high-performance Python and Azure Synapse based processes. Developed PowerBI dashboards to visualize data.
							</li>
							<li>
								<b>Developed 2 mobile applications</b> for the Ohio LTAP office using Cordova and Ionic Framework.
							</li>
							<li>
								<b>Presented at over 10 conferences</b> to technical and non-technical audiences on our innovations.
								<a href="https://tetcoalition.org/wp-content/uploads/2019/12/Conflation-Final-Slides-08-19-2021.pdf" target="_blank">
									Example: slides 30 to 53 of this presentation.
								</a>
							</li>
						</ul>
						`
					},
					{
						experienceName: "Ohio State University",
						startDate: DateTime.fromISO("2011-09-01"),
						endDate: null,
						positions: [
							{
								positionTitle: "Technical Consultant",
								startDate: DateTime.fromISO('2015-01-01'),
								endDate: null
							},
							{
								positionTitle: "Admissions Specialist",
								startDate: DateTime.fromISO('2018-10-01'),
								endDate: DateTime.fromISO('2019-05-01')
							},
							{
								positionTitle: "Program Assistant",
								startDate: DateTime.fromISO('2016-01-01'),
								endDate: DateTime.fromISO('2018-10-01')
							},
							{
								positionTitle: "Student Assistant",
								startDate: DateTime.fromISO('2011-09-01'),
								endDate: DateTime.fromISO('2016-05-01')
							}
						],
						text: `
						<ul>
							<li>
								<b>Saved professional staff over 10 hours weekly</b> spent synchronizing Excel sheets for Tutoring and Clinical
								Programs by developing a Microsoft Access database with extensive VBA customization to store parent, tutor, and
								student data. Continually developed and improved the system over 3 major releases.
							</li>
							<li>
								<b>Published in 2 academic journals</b> through supporting grant-funded academic research projects focused on energy
								policy and resiliency. Developed multiple scraping and data integration applications (Python, Java, Spring) to
								support the collection and analysis of data.
							</li>
						</ul>
						`
					}
				]
			}
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
		this.applicants[0].applications.push(this.applications[0]);
	}
}
