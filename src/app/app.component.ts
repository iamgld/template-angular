// Angular Imports
import { Component } from '@angular/core'
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'template-angular'
}
