import {Component, Input} from '@angular/core';
import {DateTime} from "luxon";
import {Application} from "../../../data/models/application.model";

@Component({
  selector: 'app-role-applications',
  templateUrl: './role-applications.component.html',
  styleUrl: './role-applications.component.scss'
})
export class RoleApplicationsComponent {
	@Input({required: true}) applications!: Application[];

	selectedApplications: Application[] = [];

    protected readonly DateTime = DateTime;

	getSeverity(status: string): string {
		switch (status) {
			case 'Waiting for review':
				return 'primary';
			case 'Interview scheduled':
				return 'success';
			case 'Rejected':
				return 'danger';
			default:
				throw new Error('Unsupported applicant status');
		}
	}
}
