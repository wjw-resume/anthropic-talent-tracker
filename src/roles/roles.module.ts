import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolesDashboardComponent} from './roles-dashboard/roles-dashboard.component';
import {RolesRoutingModule} from "./roles-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RoleListingComponent} from './roles-dashboard/role-listing/role-listing.component';
import {RolesRepoService} from "../data/repos/RolesRepoService";
import {MockRolesRepoService} from "../data/repos/mock-roles-repo.service";
import {ApplicationsRepoService} from "../data/repos/ApplicationsRepoService";
import {MockApplicationsRepoServiceService} from "../data/repos/mock-applications-repo-service.service";
import {ApplicantRepoService} from "../data/repos/ApplicantRepoService";
import {MockApplicantRepoService} from "../data/repos/mock-applicant-repo.service";
import { ViewRoleComponent } from './view-role/view-role.component';
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import { RoleApplicationsComponent } from './view-role/role-applications/role-applications.component';
import {TagModule} from "primeng/tag";


@NgModule({
	declarations: [
		RolesDashboardComponent,
		RoleListingComponent,
  ViewRoleComponent,
  RoleApplicationsComponent
	],
	imports: [
		CommonModule,
		RolesRoutingModule,
		NgbModule,
		TableModule,
		MultiSelectModule,
		FormsModule,
		ToolbarModule,
		ButtonModule,
		TagModule
	],
	providers: [
		{provide: RolesRepoService, useClass: MockRolesRepoService},
		{provide: ApplicationsRepoService, useClass: MockApplicationsRepoServiceService},
		{provide: ApplicantRepoService, useClass: MockApplicantRepoService}
	]
})
export class RolesModule {
}
