import { poppins } from '@font';
import React, { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import { getPathIcon } from 'src/utils/getPathIcon';
import styled from 'styled-components';
import { IconProps, nameIcons } from 'types';

const InputComponent = styled.input`
	padding: 9px var(--padding-xs);
	outline: none;
	border: none;
	border-radius: var(--xs);
	background: #f5f5f5;
	position: relative;
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
interface PropsIconInput extends IconProps {
	name: nameIcons;
}
interface Props {
	children: ReactNode;
	placeholder: string;
	identification: string;
	column?: boolean;
	type?: HTMLInputTypeAttribute;
	icon?: PropsIconInput;
}

const Input: FC<Props> = ({
	placeholder,
	identification,
	children,
	column = false,
	type = 'text',
	icon,
}) => {
	const Icon = getPathIcon(icon.name);

	return (
		<Label column={column} htmlFor={identification}>
			{children}
			<InputComponent
				type={type}
				id={identification}
				className={poppins.className}
				placeholder={placeholder}
			/>
			{icon && <Icon {...icon} />}
		</Label>
	);
};

export { Input };
