// Angular Imports
import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.routes').then((m) => m.AUTH_ROUTES),
	},
	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
]
