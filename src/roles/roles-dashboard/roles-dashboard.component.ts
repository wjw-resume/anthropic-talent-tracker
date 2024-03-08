import {Component, OnInit} from '@angular/core';
import {RolesRepoService} from "../../data/repos/RolesRepoService";
import {Role} from "../../data/models/role.model";
import {DateTime} from "luxon";

@Component({
  selector: 'app-roles-dashboard',
  templateUrl: './roles-dashboard.component.html',
  styleUrl: './roles-dashboard.component.scss'
})
export class RolesDashboardComponent implements OnInit {
	active: number = 1;

	roles: Role[] = [];
	openRoles: Role[] = [];
	closedRoles: Role[] = [];

	constructor(private rolesRepo: RolesRepoService) {
	}

	ngOnInit() {
		this.rolesRepo.getRoles().subscribe(roles => {
			this.roles = roles;
			this.openRoles = roles.filter(r => r.closeDate <= DateTime.now());
			this.closedRoles = roles.filter(r => r.closeDate > DateTime.now());
		});
	}

	protected readonly DateTime = DateTime;
}
