// Store Imports
import { createReducer, on } from '@ngrx/store'
import { LOGIN, LOGOUT } from '@store/actions'
import { IAuthState } from '@store/models'

export const initialAuthState: IAuthState = {
	logged: false,
}

export const authReducer = createReducer(
	initialAuthState,
	// ----------Login----------
	on(LOGIN, (previousState: IAuthState, props): IAuthState => {
		return {
			...previousState,
			logged: true,
		}
	}),
	// ----------Logout----------
	on(LOGOUT, (previousState: IAuthState): IAuthState => {
		return { ...previousState, ...initialAuthState }
	})
)
