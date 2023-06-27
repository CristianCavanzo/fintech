import { poppins } from '@font';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { getPathIcon } from 'src/utils/getPathIcon';
import styled from 'styled-components';
import { nameIcons } from 'types';

const InputComponent = styled.input`
	padding: 9px var(--padding-xs);
	outline: none;
	border: none;
	border-radius: var(--xs);
	background: #f5f5f5;
	:focus {
		outline: 2px solid var(--principalColor);
	}
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
	icon?: nameIcons;
}
const Input = ({
	placeholder,
	identification,
	children,
	column = false,
	type = 'text',
	icon,
}: Props) => {
	const Icon = getPathIcon(icon);
	return (
		<Label column={column} htmlFor={identification}>
			{children}
			<InputComponent
				type={type}
				id={identification}
				className={poppins.className}
				placeholder={placeholder}
			/>
			<Icon width={30} height={30} color="blue" />
		</Label>
	);
};

export { Input };
