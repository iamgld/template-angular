// Angular Imports
import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core'
import {
	provideRouter,
	withComponentInputBinding,
	withViewTransitions,
	withInMemoryScrolling,
} from '@angular/router'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { provideHttpClient, withFetch } from '@angular/common/http'
// This Module Imports
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideClientHydration(withEventReplay()),
		provideRouter(
			routes,
			withComponentInputBinding(),
			withViewTransitions(),
			withInMemoryScrolling({
				anchorScrolling: 'enabled',
				scrollPositionRestoration: 'top',
			}),
		),
		provideHttpClient(withFetch()),
	],
}
