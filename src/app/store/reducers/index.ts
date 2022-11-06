// Angular Imports
import { environment } from '@environment'
// Store Imports
import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { GlobalState } from '@store/models'
// Reducer Imports
import { authReducer, initialAuthState } from './auth/auth.reducer'

export const globalState: GlobalState = {
	auth: initialAuthState,
}

export const reducers: ActionReducerMap<GlobalState> = {
	auth: authReducer,
}

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : []
