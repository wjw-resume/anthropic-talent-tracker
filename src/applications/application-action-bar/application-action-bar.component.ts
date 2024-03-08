import {Component, Input} from '@angular/core';
import {Application} from "../../data/models/application.model";

@Component({
	selector: 'app-application-action-bar',
	templateUrl: './application-action-bar.component.html',
	styleUrl: './application-action-bar.component.scss'
})
export class ApplicationActionBarComponent {
	@Input({required: true}) selectedApplications: Application[] = [];
	@Input() bulkUpdateOnly: boolean = false;
	@Input() alignment: Alignment = "left";
}

export type Alignment = "left" | "middle" | "right";
