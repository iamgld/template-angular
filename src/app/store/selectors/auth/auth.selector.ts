// Store Imports
import { createFeatureSelector, createSelector } from '@ngrx/store'
// Shared Imports
import { IAuthState } from '@store/models'

const selectFeatureSelector = createFeatureSelector<IAuthState>('auth')

export const selectLoggedSelector = createSelector(
	selectFeatureSelector,
	(auth: IAuthState) => auth.logged
)
