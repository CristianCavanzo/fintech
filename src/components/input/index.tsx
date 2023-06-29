import { poppins } from '@font';
import React, { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import { getPathIcon } from 'src/utils/getPathIcon';
import styled from 'styled-components';
import { IconProps, nameIcons } from 'types';

const InputComponent = styled.input<{ spaceIcon: boolean }>`
	padding: var(--padding-xs) ${(props) => (props.spaceIcon && '56px') || 'var(--padding-s)'};
	outline: none;
	border: none;
	border-radius: var(--xxs);
	background: #f5f5f5;
	:focus {
		outline: 2px solid var(--principalColor);
	}
`;
interface LabelProps {
	column: boolean;
}
const Label = styled.label<LabelProps>`
	row-gap: var(--xxs);
	display: inline-flex;
	flex-direction: ${(props) => props.column && 'column'};
	width: 100%;
	position: relative;
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
	console.log(Boolean(icon));
	return (
		<Label column={column} htmlFor={identification}>
			{icon && <Icon {...icon} />}
			{children}
			<InputComponent
				spaceIcon={Boolean(icon)}
				type={type}
				id={identification}
				className={poppins.className}
				placeholder={placeholder}
			/>
		</Label>
	);
};

export { Input };
