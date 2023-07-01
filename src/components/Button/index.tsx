import { poppins } from '@font';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
const ButtonComponent = styled.button`
	background: var(--principalColor);
	color: var(--white);
	border: none;
	padding: 12px;
	text-align: center;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
	:focus {
		outline: 2px solid #71a9f7;
	}
`;

interface Props {
	children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
	return <ButtonComponent className={poppins.className}>{children}</ButtonComponent>;
};

export { Button };
