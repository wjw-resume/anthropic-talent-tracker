import {Injectable} from '@angular/core';
import {Applicant} from "../models/applicant.model";
import {Observable, of} from "rxjs";
import {SharedDataService} from "../shared/shared-data.service";
import {ApplicantRepoService} from "./ApplicantRepoService";

@Injectable({
	providedIn: 'root'
})
export class MockApplicantRepoService extends ApplicantRepoService {
	constructor(private sharedData: SharedDataService) {
		super();
	}

	override getApplicants(): Observable<Applicant[]> {
		return of(this.sharedData.applicants);
	}

	override getApplicant(applicantId: number): Observable<Applicant | undefined> {
		return of(this.sharedData.applicants.find(a => a.applicantId === applicantId));
	}
}
