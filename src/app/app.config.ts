// Angular Imports
import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { provideClientHydration } from '@angular/platform-browser'
// import { BrowserModule } from '@angular/platform-browser'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { environment } from '@environment'
// This Module Imports
import { routes } from './app.routes'
// Store Imports
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideEffects } from '@ngrx/effects'
import { effects } from '@store/effects'
import { provideRouterStore } from '@ngrx/router-store'
import { reducers, metaReducers } from '@store/reducers'

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withComponentInputBinding()),
		// provideClientHydration(),
		provideAnimations(),
		provideHttpClient(),
		// Store
		provideStore(reducers, { metaReducers }),
		provideEffects([...effects]),
		provideStoreDevtools({
			name: 'Store',
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true,
		}),
		provideRouterStore(),
	],
}
