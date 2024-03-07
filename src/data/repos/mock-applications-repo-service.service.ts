import {Injectable} from '@angular/core';
import {ApplicationsRepoService} from "./ApplicationsRepoService";
import {Observable, of} from 'rxjs';
import {Application} from '../models/application.model';
import {SharedDataService} from "../shared/shared-data.service";

@Injectable({
	providedIn: 'root'
})
export class MockApplicationsRepoServiceService extends ApplicationsRepoService {
	constructor(private sharedData: SharedDataService) {
		super();
	}
	override getApplications(): Observable<Application[]> {
		return of(this.sharedData.applications);
	}

	override getApplication(applicationId: number): Observable<Application | undefined> {
		return of(this.sharedData.applications.find(a => a.applicationId === applicationId));
	}
}
