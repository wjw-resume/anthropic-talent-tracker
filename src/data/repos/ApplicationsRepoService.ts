import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Application} from "../models/application.model";

@Injectable({
	providedIn: 'root'
})
export abstract class ApplicationsRepoService {
	abstract getApplications(): Observable<Application[]>;
	abstract getApplicationsForRole(roleId: number): Observable<Application[]>;
	abstract getApplication(applicationId: number): Observable<Application | undefined>;
}
