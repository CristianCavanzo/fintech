import { ValidationArguments } from 'class-validator';

export const messageLength = (arg: ValidationArguments) =>
	`El ${arg.property} debe tener entre ${arg.constraints[0]} y ${arg.constraints[1]} caracteres`;

export const valideEmail = () => `El email debe ser valido `;

export const notEmpty = (arg: ValidationArguments) =>
	`El campo ${arg.property} no debe estar vacio`;
