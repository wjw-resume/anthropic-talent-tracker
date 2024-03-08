import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// {
	// 	path: ":id",
	// 	component: ViewRoleComponent
	// },
	// {
	// 	path: "",
	// 	pathMatch: "full",
	// 	component: RolesDashboardComponent
	// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
