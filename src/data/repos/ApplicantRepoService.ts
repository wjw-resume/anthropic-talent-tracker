import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Applicant} from "../models/applicant.model";

@Injectable({
	providedIn: 'root'
})
export abstract class ApplicantRepoService {
	abstract getApplicants(): Observable<Applicant[]>;
	abstract getApplicant(applicantId: number): Observable<Applicant | undefined>;
}
