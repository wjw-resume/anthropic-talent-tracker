import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewApplicationComponent} from './view-application/view-application.component';
import {ApplicationsRepoService} from "../data/repos/ApplicationsRepoService";
import {MockApplicationsRepoService} from "../data/repos/mock-applications-repo.service";
import {ApplicationsRoutingModule} from "./applications-routing.module";
import {ApplicationActionBarComponent} from './application-action-bar/application-action-bar.component';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {AccordionModule} from "primeng/accordion";
import {RolesRepoService} from "../data/repos/RolesRepoService";
import {MockRolesRepoService} from "../data/repos/mock-roles-repo.service";
import { ApplicationStatusTagComponent } from './application-status-tag/application-status-tag.component';
import {TagModule} from "primeng/tag";


@NgModule({
	declarations: [
		ViewApplicationComponent,
		ApplicationActionBarComponent,
  ApplicationStatusTagComponent
	],
	imports: [
		CommonModule,
		ApplicationsRoutingModule,
		ButtonModule,
		ToolbarModule,
		AccordionModule,
		TagModule
	],
	providers: [
		{provide: ApplicationsRepoService, useClass: MockApplicationsRepoService},
		{provide: RolesRepoService, useClass: MockRolesRepoService},
	],
	exports: [
		ApplicationActionBarComponent,
		ApplicationStatusTagComponent
	]
})
export class ApplicationsModule {
}
