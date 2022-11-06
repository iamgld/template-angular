// Store Imports
import { createSelector } from '@ngrx/store'
import { GlobalState, AuthState } from '@store/models'

export const authState = (state: GlobalState) => state.auth

export const getLoggedSelector = createSelector(authState, (auth: AuthState) => auth.logged)
