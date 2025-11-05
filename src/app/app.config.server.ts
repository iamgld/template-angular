// Angular Imports
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'
import { provideServerRendering, withRoutes } from '@angular/ssr'
// This Module Imports
import { appConfig } from './app.config'
import { serverRoutes } from './app.routes.server'

const serverConfig: ApplicationConfig = {
	providers: [provideServerRendering(withRoutes(serverRoutes))],
}

export const mergedConfig = mergeApplicationConfig(appConfig, serverConfig)
