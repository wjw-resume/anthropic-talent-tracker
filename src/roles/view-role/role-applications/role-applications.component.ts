import {Component, Input} from '@angular/core';
import {DateTime} from "luxon";
import {Application} from "../../../data/models/application.model";
import {ApplicationStatus} from "../../../data/enums/applicationStatus";

@Component({
  selector: 'app-role-applications',
  templateUrl: './role-applications.component.html',
  styleUrl: './role-applications.component.scss'
})
export class RoleApplicationsComponent {
	@Input({required: true}) applications!: Application[];

	selectedApplications: Application[] = [];

	applicationStatuses = Object.values(ApplicationStatus);
	filteredStatuses: string[] = [];

    protected readonly DateTime = DateTime;

	getSeverity(status: string): string {
		switch (status) {
			case ApplicationStatus.WAITING_FOR_REVIEW:
				return 'primary';
			case ApplicationStatus.INTERVIEW_SCHEDULED:
				return 'success';
			case ApplicationStatus.REJECTED:
				return 'danger';
			default:
				throw new Error('Unsupported applicant status');
		}
	}
}
