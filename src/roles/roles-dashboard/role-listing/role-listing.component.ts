import {Component, Input} from '@angular/core';
import {Role} from "../../../data/models/role.model";
import {DateTime} from "luxon";

@Component({
	selector: 'app-role-listing',
	templateUrl: './role-listing.component.html',
	styleUrl: './role-listing.component.scss'
})
export class RoleListingComponent {
	@Input({required: true}) role!: Role;
	@Input() showStatus: boolean = false;

	get roleStatus(): string {
		return this.role.closeDate <= DateTime.now() ? 'Open' : 'Closed';
	}
}
