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
	errorEmail: boolean;
	errorPassword: boolean;
	// eslint-disable-next-line no-unused-vars
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
}

const LoginComponent = ({ handleSubmit, errorEmail, errorPassword }: Props) => {
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
			>
				Ingresa tu email
			</Input>
			{errorEmail && <p>Error</p>}
			<Input
				column={true}
				type="password"
				identification="password"
				placeholder="Ingresa tu email"
				icon={{ name: 'password', ...basicData }}
			>
				Ingresa tu contraseña
			</Input>
			{errorPassword && <p>Error</p>}
			<Button>Iniciar sesión</Button>
		</Login>
	);
};

export { LoginComponent };
