import {Injectable} from '@angular/core';
import {RolesRepoService} from "./RolesRepoService";
import {Observable, of} from 'rxjs';
import {Role} from '../models/role.model';
import {SharedDataService} from "../shared/shared-data.service";

@Injectable({
	providedIn: 'root'
})
export class MockRolesRepoService extends RolesRepoService {
	constructor(private sharedData: SharedDataService) {
		super();
	}

	override getRoles(): Observable<Role[]> {
		return of(this.sharedData.roles);
	}

	override getRole(roleId: number): Observable<Role | undefined> {
		return of(this.sharedData.roles.find(r => r.roleId === roleId));
	}


}
