// Angular Imports
import { bootstrapApplication } from '@angular/platform-browser'
// This Module Imports
import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'

bootstrapApplication(AppComponent, appConfig).catch((error) => console.error(error))
