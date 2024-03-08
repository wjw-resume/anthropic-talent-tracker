import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RolesModule} from "../roles/roles.module";

const routes: Routes = [
	{
		path: "roles",
		loadChildren: () => import('./../roles/roles.module').then(m => m.RolesModule)
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
