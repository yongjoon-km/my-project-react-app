import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';
import { Form, Button } from 'react-bootstrap'
import { check } from '../modules/user';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const ErrorMessage = styled.div`
	color: red;
	text-align: center;
	font-size: 0.875rem;
	margin-top: 1rem;
`;

const Register = ({ history }) => {

	const [error, setError] = useState();

	const dispatch = useDispatch();
	const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
		form: auth.register,
		auth: auth.auth,
		authError: auth.authError,
		user: user.user,
	}));

	const onChange = e => {
		const { value, name } = e.target;

		dispatch(
			changeField({
				form: 'register',
				key: name,
				value
			})
		);
	};

	const onSubmit = e => {
		e.preventDefault();
		const { username, email, password, passwordConfirm } = form;

		if ([username, email, password, passwordConfirm].includes('')) {
			setError('fill every field');
			return;
		}
		if (password !== passwordConfirm) {
			setError('confirmed password not equal');
			dispatch(changeField({ form: 'register', key: 'password', value: '' }));
			dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));
			return;
		}
		dispatch(register({ username, email, password }));
	};

	useEffect(() => {
		dispatch(initializeForm('register'));
	}, [dispatch]);

	useEffect(() => {
		if (authError) {
			if (authError.response.status === 400) {
				setError('user already exist');
				return;
			}
			setError('register failed');
			return;
		}
		if (auth) {
			console.log('register success', auth);
			dispatch(check());
		}
	}, [authError, auth, dispatch]);

	useEffect(() => {
		if (user) {
			console.log('check API success', user);
			history.push('/');
		}
	}, [user, history]);

	return (
		<div>
			<Form onSubmit={onSubmit}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						onChange={onChange}
						name='username'
						value={form.name} />
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={onChange}
						name='email'
						value={form.email} />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={onChange}
						name="password"
						value={form.password} />
				</Form.Group>

				<Form.Group controlId="formBasicPasswordConfirm">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm password"
						onChange={onChange}
						name="passwordConfirm"
						value={form.passwordConfirm} />
				</Form.Group>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</div>
	);
}

export default withRouter(Register);