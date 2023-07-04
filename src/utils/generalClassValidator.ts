import { ValidationArguments } from 'class-validator';

export const messageLength = (arg: ValidationArguments, name: string) =>
	`El ${name} debe tener entre ${arg.constraints[0]} y ${arg.constraints[1]} caracteres`;

export const valideEmail = () => `El email debe ser valido `;
