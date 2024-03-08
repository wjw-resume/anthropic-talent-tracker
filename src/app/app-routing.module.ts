import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: "roles",
		loadChildren: () => import('./../roles/roles.module').then(m => m.RolesModule)
	},
	{
		path: "applications",
		loadChildren: () => import("./../applications/applications.module").then(m => m.ApplicationsModule)
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "/roles"
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	  preloadingStrategy: PreloadAllModules,
	  enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
