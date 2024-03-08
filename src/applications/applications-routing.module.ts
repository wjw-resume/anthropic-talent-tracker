import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewApplicationComponent} from "./view-application/view-application.component";

const routes: Routes = [
	{
		path: ":id",
		component: ViewApplicationComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
