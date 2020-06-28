import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
	CHANGE_FIELD,
	({ form, key, value }) => ({
		form,		// register, login
		key,		// email, password, passwordConfirm
		value,	// value to be changed
	}),
);

export const register = createAction(REGISTER, ({ username, email, password }) => ({
	username,
	email,
	password,
}));

export const login = createAction(LOGIN, ({ email, password }) => ({
	email,
	password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
	yield takeLatest(REGISTER, registerSaga);
	yield takeLatest(LOGIN, loginSaga);
}

// register or login
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
	register: {
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	},
	login: {
		email: '',
		password: '',
	},
	auth: null,
	authError: null,
};

const auth = handleActions(
	{
		[CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
			produce(state, draft => { 		// using immer to handle immutable object
				draft[form][key] = value;
			}),
		[INITIALIZE_FORM]: (state, { payload: form }) => ({
			...state,
			[form]: initialState[form],
			authError: null,
		}),
		[REGISTER_SUCCESS]: (state, {payload: auth}) => ({
			...state,
			authError: null,
			auth,
		}),
		[REGISTER_FAILURE]: (state, {payload: error}) => ({
			...state,
			authError: error,
		}),
		[LOGIN_SUCCESS]: (state, {payload: auth}) => ({
			...state,
			authError: null,
			auth,
		}),
		[LOGIN_FAILURE]: (state, {payload: error}) => ({
			...state,
			authError: error,
		}),
	},
	initialState,
);

export default auth;