import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoolYesNoPipe} from "./pipes/bool-yes-no.pipe";
import { MaxLengthPipePipe } from './pipes/max-length-pipe.pipe';


@NgModule({
	declarations: [
		BoolYesNoPipe,
  MaxLengthPipePipe
	],
	imports: [
		CommonModule
	],
	exports: [
		BoolYesNoPipe,
		MaxLengthPipePipe
	]
})
export class SharedModule {
}
