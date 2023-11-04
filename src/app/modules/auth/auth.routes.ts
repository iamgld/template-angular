// Angular Imports
import { Routes } from '@angular/router'
// This Module Imports
import { AuthComponent } from './auth.component'

export const AUTH_ROUTES: Routes = [
	{
		path: '',
		component: AuthComponent,
		title: 'Auth',
	},

	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
]
