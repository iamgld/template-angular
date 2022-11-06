// Angular Imports
import { Injectable } from '@angular/core'
// Thirdparty Imports
import { map } from 'rxjs'
// NgRx Redux Imports
import { Actions, ofType, createEffect } from '@ngrx/effects'
// import { OPEN_NOTIFICATIONS, OPEN_NOTIFICATIONS_SUCCESS } from '@shared/store/actions'

@Injectable({ providedIn: 'root' })
export class AuthEffect {
	// openNotifications = createEffect(() =>
	// 	this._actions.pipe(
	// 		ofType(OPEN_NOTIFICATIONS),
	// 		// Commentted for now
	// 		// tap(() => this._notifications.getPastNotifications().subscribe()),
	// 		map(() => OPEN_NOTIFICATIONS_SUCCESS())
	// 	)
	// )

	constructor(private _actions: Actions) {}
}
