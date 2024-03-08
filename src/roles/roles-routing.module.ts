import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RolesDashboardComponent} from "./roles-dashboard/roles-dashboard.component";
import {ViewRoleComponent} from "./view-role/view-role.component";

const routes: Routes = [
	{
		path: ":id",
		component: ViewRoleComponent
	},
	{
		path: "",
		pathMatch: "full",
		component: RolesDashboardComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
