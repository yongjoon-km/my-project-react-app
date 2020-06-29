import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap'
import { check } from '../../modules/user';
import './Login.css'
import '../style.css'
import styled from 'styled-components';

const ErrorMessage = styled.div`
	color: red;
	text-align: center;
	font-size: 0.875rem;
	margin-top: 1rem;
`;


const Login = ({ history }) => {
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
	const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
		form: auth.login,
		auth: auth.auth,
		authError: auth.authError,
		user: user.user,
	}));

	const onChange = e => {
		const { value, name } = e.target;
		dispatch(
			changeField({
				form: 'login',
				key: name,
				value
			})
		);
	};

	const onSubmit = e => {
		e.preventDefault();
		const { email, password } = form;
		dispatch(login({email, password}))
	}

	// initialize form when component loaded first time.
	useEffect(() => {
		dispatch(initializeForm('login'));
	}, [dispatch]);

	useEffect(() => {
		if (authError) {
			console.log('auth error', authError);
			setError('login failed');
			return;
		}
		if (auth) {
			console.log('login success');
			dispatch(check(auth));
		}
	}, [auth, authError, dispatch]);

	useEffect(() => {
		if (user) {
			history.push('/');
			try {
				localStorage.setItem('user', JSON.stringify(user));
				localStorage.setItem('auth', JSON.stringify(auth));
			} catch (e) {
				console.log('localStorage is not working');
			}
		}
	}, [history, user]);

	return (
		<>
			<Form onSubmit={onSubmit} method='post'>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						onChange={onChange}
						value={form.email} />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						onChange={onChange}
						value={form.password} />
				</Form.Group>

				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Button className="btn-submit" variant="primary" type="submit">
					Login
				</Button>
			</Form>
			<Link to='/register'>
				<Button className="btn-register" variant="primary" type="register">
					Register
				</Button>
			</Link>
		</>
	);
}

export default withRouter(Login);