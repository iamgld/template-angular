// Store Imports
import { createAction, props } from '@ngrx/store'

// ----------Login----------
export const LOGIN = createAction('[Auth] Login', props<{ user: any }>())
export const LOGIN_SUCCESS = createAction('[Auth] Login success')
export const LOGIN_FAILURE = createAction('[Auth] Login failure', props<{ error: string }>())

// ----------Logout----------
export const LOGOUT = createAction('[Auth] Logout')
