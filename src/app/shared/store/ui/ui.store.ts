// Store Imports
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'

export interface UiState {
	showSidenav: boolean
}

export const initialState: UiState = {
	showSidenav: false,
}

export const UiStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store) => ({
		openSidenav: (): void => {
			patchState(store, () => ({ showSidenav: true }))
		},
		closeSidenav: (): void => {
			patchState(store, () => ({ showSidenav: false }))
		},
	})),
)
