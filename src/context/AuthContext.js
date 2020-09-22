import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
	switch (action.type) {
		case 'ERROR':
			return { ...state, errorMessage: action.payload };
		case 'SIGNIN':
			return { errorMessage: '', token: action.payload };
		case 'SIGNOUT':
			return { errorMessage: '', token: null };
		case 'CLEAR_ERROR_MESSAGE':
			return { ...state, errorMessage: '' };

		default:
			return state;
	}
};
const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
};
const onStartSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('TrackList');
	} else {
		navigate('Signin');
	}
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'SIGNIN', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'ERROR',
			payload: 'Something went wrong with sign up',
		});
	}
};
const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signin', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'SIGNIN', payload: response.data.token });
		navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'ERROR',
			payload: 'Something went wrong with sign in',
		});
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({type:'SIGNOUT'});
	navigate('Signin');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage,onStartSignin }, // actions object
	{ token: null, errorMessage: '' } // state object
);
