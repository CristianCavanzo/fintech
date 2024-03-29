import { LoginComponent } from '@components/pages/Login';
import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';
import React, { useState } from 'react';
import { messageLength, notEmpty, valideEmail } from 'src/utils/generalClassValidator';
import { Generals } from 'src/utils/generals';
class Login extends Generals {
	@Length(10, 20, {
		message: messageLength,
	})
	@IsEmail({}, { message: valideEmail })
	@IsNotEmpty({ message: notEmpty })
	email: string;

	@IsNotEmpty({ message: notEmpty })
	@MinLength(5)
	password: string;

	constructor(email: string, password: string) {
		super();
		this.email = email;
		this.password = password;
	}
}

const Home = () => {
	const [state, setState] = useState({
		Email: {
			error: false,
			name: 'email',
			value: '',
		},
		Password: {
			error: false,
			name: 'password',
			value: '',
		},
	});
	const updateState = (changes) => {
		setState({ ...state, ...changes });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email: HTMLInputElement = e.target[0];
		const password: HTMLInputElement = e.target[1];
		const login = new Login(email.value, password.value);
		login.showErrorInput(login, state, setState);
	};

	return <LoginComponent handleSubmit={handleSubmit} state={state} updateState={updateState} />;
};

export default Home;
