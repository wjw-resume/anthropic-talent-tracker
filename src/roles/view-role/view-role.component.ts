import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RolesRepoService} from "../../data/repos/RolesRepoService";
import {Role} from "../../data/models/role.model";
import {Application} from "../../data/models/application.model";
import {ApplicationsRepoService} from "../../data/repos/ApplicationsRepoService";
import {DateTime} from "luxon";

@Component({
	selector: 'app-view-role',
	templateUrl: './view-role.component.html',
	styleUrl: './view-role.component.scss'
})
export class ViewRoleComponent implements OnInit {
	role!: Role;
	applications: Application[] = [];

	constructor(private route: ActivatedRoute,
				private rolesRepo: RolesRepoService,
				private appsRepo: ApplicationsRepoService) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			const roleId = parseInt(params['id']);

			this.rolesRepo.getRole(roleId).subscribe(role => {
				if (role === undefined) {
					console.error("Undefined");
				} else {
					this.role = role;
				}
			});

			this.appsRepo.getApplicationsForRole(roleId).subscribe(apps => {
				if (apps === undefined) {
					console.error("Apps undefined");
				} else {
					this.applications = apps;
				}
			});
		});
	}

	protected readonly DateTime = DateTime;
}
