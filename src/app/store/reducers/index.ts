// Angular Imports
import { environment } from 'src/environments/environment.local'
// Store Imports
import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { IGlobalState } from '@store/models'
// Reducer Imports
import { authReducer, initialAuthState } from './auth/auth.reducer'

export const globalState: IGlobalState = {
	auth: initialAuthState,
}

export const reducers: ActionReducerMap<IGlobalState> = {
	auth: authReducer,
}

export const metaReducers: MetaReducer<IGlobalState>[] = !environment.production ? [] : []
