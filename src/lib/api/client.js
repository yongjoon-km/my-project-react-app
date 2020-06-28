import axios from 'axios';

const client = axios.create();

// API address
// client.defaults.baseURL = 'https://api.com';

// set common header
// client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

// set intercepter
/*
axios.interceptors.response.use(
	response => {
		// if request success
		return response;
	},
	error => {
		// if request fail
		return Promise.reject(error);
	}
);
*/

export default client;