import { poppins } from '@font';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
	padding: var(--padding-xxs) var(--padding-xs);
	outline: none;
	border: 1px solid #000;
	border-radius: var(--xxl);
`;
interface LableProps {
	column: boolean;
}
const Label = styled.label<LableProps>`
	row-gap: var(--xxs);
	display: inline-flex;
	flex-direction: ${(props) => props.column && 'column'};
	width: 100%;
`;

// Props interface
interface Props {
	children: ReactNode;
	placeholder: string;
	identification: string;
	column?: boolean;
	type?: HTMLInputTypeAttribute;
}
const Input = ({ placeholder, identification, children, column = false, type = 'text' }: Props) => {
	return (
		<Label column={column} htmlFor={identification}>
			{children}
			<InputComponent
				type={type}
				id={identification}
				className={poppins.className}
				placeholder={placeholder}
			/>
		</Label>
	);
};

export { Input };
