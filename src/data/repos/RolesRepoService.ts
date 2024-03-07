import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Role} from "../models/role.model";

@Injectable({
	providedIn: 'root'
})
export abstract class RolesRepoService {
	abstract getRoles(): Observable<Role[]>;
	abstract getRole(roleId: number): Observable<Role | undefined>;
}
