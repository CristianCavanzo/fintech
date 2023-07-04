import { LoginComponent } from '@components/pages/Login';
import {
	IsEmail,
	IsNotEmpty,
	Length,
	ValidationArguments,
	validateOrReject,
} from 'class-validator';
import React from 'react';
import { messageLength, valideEmail } from 'src/utils/generalClassValidator';

class Login {
	constructor(email: string) {
		this.email = email;
	}

	@Length(10, 20, {
		message: (args: ValidationArguments) => messageLength(args, 'email'),
	})
	@IsEmail({}, { message: valideEmail })
	@IsNotEmpty()
	email: string;
}
const Home = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email: HTMLInputElement = e.target[0];
		// const password: HTMLInputElement = e.target[1];
		const login = new Login(email.value);
		console.log(login);
		await validateOrReject(login);
	};

	return <LoginComponent handleSubmit={handleSubmit} />;
};

export default Home;
