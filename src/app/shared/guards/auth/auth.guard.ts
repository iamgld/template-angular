// Angular Imports
import { Injectable } from '@angular/core'
import {
	Router,
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router'
// Thirdparty Imports
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	logged = false

	constructor(private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.logged) {
			// console.log('[AUTH] User Authenticated')
			return true
		} else {
			// console.log('[AUTH] User Not Authenticated')
			this.router.navigate(['/login'])
			return false
		}
	}
}
