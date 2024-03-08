import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Application} from "../../data/models/application.model";
import {RolesRepoService} from "../../data/repos/RolesRepoService";
import {Role} from "../../data/models/role.model";
import {map, Observable} from "rxjs";
import {ApplicationStatus} from "../../data/enums/applicationStatus";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
	selector: 'app-application-action-bar',
	templateUrl: './application-action-bar.component.html',
	styleUrl: './application-action-bar.component.scss'
})
export class ApplicationActionBarComponent implements OnInit {
	@Input({required: true}) selectedApplications: Application[] = [];
	@Input() bulkUpdateOnly: boolean = false;
	@Input() alignment: Alignment = "left";

	@ViewChild('scheduleInterview', {static: true}) scheduleInterviewOverlay!: OverlayPanel;

	interviewTimes: { [k: string]: string } = {};

	firstAppRole!: Role;

	protected readonly Object = Object;

	constructor(private rolesRepo: RolesRepoService) {
	}

	ngOnInit() {

	}

	getRole(): Observable<string> {
		return this.rolesRepo.getRole(this.selectedApplications[0].roleId).pipe(
			map(r => r?.roleName ?? '')
		);
	}

	updateStatus(application: Application): void {
		application.applicationStatus = ApplicationStatus.INTERVIEW_SCHEDULED;
	}

	handleScheduleClick(): void {
		this.updateStatus(this.selectedApplications[0]);
		this.scheduleInterviewOverlay.hide();
	}
}

export type Alignment = "left" | "middle" | "right";
