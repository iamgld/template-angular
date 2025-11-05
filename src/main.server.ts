// Angular Imports
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser'
// This Module Imports
import { AppComponent } from './app/app.component'
import { mergedConfig } from './app/app.config.server'

const bootstrap = (context: BootstrapContext) =>
	bootstrapApplication(AppComponent, mergedConfig, context)

export default bootstrap
