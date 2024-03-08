import {Component, OnInit} from '@angular/core';
import {Application} from "../../data/models/application.model";
import {ApplicationsRepoService} from "../../data/repos/ApplicationsRepoService";
import {ActivatedRoute} from "@angular/router";
import {RolesRepoService} from "../../data/repos/RolesRepoService";
import {Role} from "../../data/models/role.model";
import {DomSanitizer} from "@angular/platform-browser";
import {sanitizeIdentifier} from "@angular/compiler";

@Component({
	selector: 'app-view-application',
	templateUrl: './view-application.component.html',
	styleUrl: './view-application.component.scss'
})
export class ViewApplicationComponent implements OnInit {
	application!: Application;
	role!: Role;

	constructor(private applicationsRepo: ApplicationsRepoService,
				private route: ActivatedRoute,
				private rolesRepo: RolesRepoService,
				public sanitizer: DomSanitizer) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			const appId = parseInt(params['id']);

			this.applicationsRepo.getApplication(appId).subscribe(application => {
				if (application === undefined) {
					throw new Error("Unable to get application");
				}

				this.application = application;

				this.rolesRepo.getRole(application.roleId).subscribe(role => {
					if (role === undefined) {
						throw new Error("Unable to get role associated with application");
					}

					this.role = role;
				});
			});
		});
	}

	protected readonly window = window;
	protected readonly sanitizeIdentifier = sanitizeIdentifier;
}
