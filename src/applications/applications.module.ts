import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewApplicationComponent} from './view-application/view-application.component';
import {ApplicationsRepoService} from "../data/repos/ApplicationsRepoService";
import {MockApplicationsRepoService} from "../data/repos/mock-applications-repo.service";
import {ApplicationsRoutingModule} from "./applications-routing.module";
import {ApplicationActionBarComponent} from './application-action-bar/application-action-bar.component';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";


@NgModule({
	declarations: [
		ViewApplicationComponent,
		ApplicationActionBarComponent
	],
	imports: [
		CommonModule,
		ApplicationsRoutingModule,
		ButtonModule,
		ToolbarModule
	],
	providers: [
		{provide: ApplicationsRepoService, useClass: MockApplicationsRepoService}
	],
	exports: [
		ApplicationActionBarComponent
	]
})
export class ApplicationsModule {
}
