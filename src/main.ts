// Angular Imports
import { bootstrapApplication } from '@angular/platform-browser'
// This Module Imports
import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'

bootstrapApplication(AppComponent, appConfig).catch((error) =>
	// eslint-disable-next-line no-console
	console.error(error)
)
