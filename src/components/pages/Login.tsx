import React from 'react';
import styled from 'styled-components';

import { Button } from '@components/Button';
import { Input } from '@components/input';

const Login = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	row-gap: 12px;
`;

interface Props {
	state: {
		Email: {
			error: boolean;
			name: string;
			value: string;
		};
		Password: {
			error: boolean;
			name: string;
			value: string;
		};
	};
	// eslint-disable-next-line no-unused-vars
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
	// eslint-disable-next-line no-unused-vars
	updateState: (changes: Object) => void;
}

const LoginComponent = ({ handleSubmit, state }: Props) => {
	const basicData = {
		width: 30,
		height: 30,
		className: 'p-absolute icons__input',
		color: 'var(--gray)',
	};
	return (
		<Login onSubmit={handleSubmit} className="display-grid row_gap--xs place-content-center ">
			{/* https://assets.materialup.com/uploads/082d4c7c-55aa-41d5-86c5-0ba061189743/preview.jpg */}

			<Input
				icon={{ name: 'email', ...basicData }}
				column={true}
				type="email"
				identification="email"
				placeholder="Ingresa tu email"
				value={state.Email.value}
				// onInput={(e) => {
				// 	console.log(e);
				// }}
			>
				Ingresa tu email
			</Input>
			{/* { && <p>Error</p>} */}
			<Input
				column={true}
				type="password"
				identification="password"
				placeholder="Ingresa tu email"
				icon={{ name: 'password', ...basicData }}
				// value={state.Password.value}
				// onInput={(e) => {
				// 	console.log(e);
				// }}
			>
				Ingresa tu contraseña
			</Input>
			{/* { && <p>Error</p>} */}
			<Button>Iniciar sesión</Button>
		</Login>
	);
};

export { LoginComponent };
