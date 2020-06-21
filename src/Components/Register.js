import React from 'react';
import { Form, Button } from 'react-bootstrap'

const Register = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" />
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group controlId="formBasicPasswordConfirm">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm password" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</div>
	);
}

export default Register;