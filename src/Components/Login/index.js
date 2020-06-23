import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap'
import './Login.css'
import '../style.css'

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [authFails, setAuthFails] = useState(false);

	async function loginHandler(e) {
		e.preventDefault();
		const res = await fetch('http://localhost:5000/auth/login', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({
				email: email,
				password: password,
			})
		});
		console.log(res.body);
		if (res.status === 200) {
			const data = await res.json();
			console.log(data);
			window.location.href='/';
		} else {
			// should alert user to try again
			setAuthFails(true);
		}
	}

	return (
		<>
			<Form onSubmit={loginHandler} method='post'>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>

				<Button className="btn-submit" variant="primary" type="submit">
					Login
				</Button>
			</Form>
			<Link to='/register'>
				<Button className="btn-register" variant="primary" type="register">
					Register
				</Button>
			</Link>
			{
				(authFails) && (
					<>
						<Redirect to='/login' />
					</>
				)
			}
		</>
	);
}

export default Login;