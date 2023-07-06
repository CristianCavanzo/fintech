import { LoginComponent } from '@components/pages/Login';
import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';
import React from 'react';
import { messageLength, notEmpty, valideEmail } from 'src/utils/generalClassValidator';
import { validation } from 'src/utils/getPathIcon';

class Login {
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
		this.email = email;
		this.password = password;
	}
}

const Home = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email: HTMLInputElement = e.target[0];
		const password: HTMLInputElement = e.target[1];
		const login = new Login(email.value, password.value);
		validation(login);
	};

	return <LoginComponent handleSubmit={handleSubmit} />;
};

export default Home;
