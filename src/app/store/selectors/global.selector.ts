// Store Imports
import { createSelector } from '@ngrx/store'
import { GlobalState } from '@store/models'

export const globalState = (state: GlobalState) => state

export const getGlobalSelector = createSelector(globalState, (global: GlobalState) => global)
