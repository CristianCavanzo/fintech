import { Input } from '@components/input';
import React from 'react';
import styled from 'styled-components';
const Main = styled.section``;
const Home = () => {
	const basicData = {
		width: 30,
		height: 30,
		className: 'p-absolute icons__input',
		color: 'var(--gray)',
	};
	return (
		<Main className="display-grid row_gap--xs">
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

			<Input
				column={true}
				type="password"
				identification="password"
				placeholder="Ingresa tu email"
				icon={{ name: 'password', ...basicData }}
			>
				Ingresa tu contraseña
			</Input>
		</Main>
	);
};

export default Home;
