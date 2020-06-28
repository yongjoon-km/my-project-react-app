import client from './client';

// login user
export const login = ({ email, password }) =>
	client.post('/auth/login', { email, password });

// register new user
export const register = ({ username, email, password }) =>
	client.post('/auth/register', { username, email, password });

// login check
export const check = () => client.get('/auth/check');