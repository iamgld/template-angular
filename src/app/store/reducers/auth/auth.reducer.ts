// Store Imports
import { createReducer, on } from '@ngrx/store'
import { LOGIN, LOGOUT } from '@store/actions'
import { AuthState } from '@store/models'

export const initialAuthState: AuthState = {
	logged: false,
}

export const authReducer = createReducer(
	initialAuthState,
	// ----------Login----------
	on(LOGIN, (previousState: AuthState, props) => {
		return {
			...previousState,
			logged: true,
		}
	}),
	// ----------Logout----------
	on(LOGOUT, (previousState: AuthState) => {
		return { ...previousState, ...initialAuthState }
	})
)
