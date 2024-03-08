import {Component, Input} from '@angular/core';
import {ApplicationStatus} from "../../data/enums/applicationStatus";

@Component({
	selector: 'app-application-status-tag',
	templateUrl: './application-status-tag.component.html',
	styleUrl: './application-status-tag.component.scss'
})
export class ApplicationStatusTagComponent {
	@Input({required: true}) status!: string;

	getSeverity(): string {
		switch (this.status) {
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
