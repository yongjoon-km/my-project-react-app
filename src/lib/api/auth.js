import client from './client';

// login user
export const login = ({ email, password }) =>
	client.post('/auth/login', { email, password });

// register new user
export const register = ({ username, email, password }) =>
	client.post('/auth/register', { username, email, password });

// login check
// export const check = ({auth}) => client.post('auth/check', {auth});



export const check = (auth) => {
	console.log(auth);
	const { accessToken } = auth;
	return client.post('/auth/check', {},
		{
			headers: { Authorization: accessToken }
		});
}

export const logout = () => client.post('/auth/logout');