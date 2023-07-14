import { validateOrReject } from 'class-validator';
import React from 'react';
import { ErrorClassValidator } from 'types';

export class Generals {
	constructor() {}
	validation = async (value: Object) => {
		try {
			const data = await validateOrReject(value);
			console.log(data);
		} catch (errors: unknown) {
			if (Array.isArray(errors)) {
				const errorsClassValidator: ErrorClassValidator[] = errors;
				const messages = errorsClassValidator.map((error) => ({
					message: error.constraints,
					item: error.property,
				}));
				return messages;
			}
		}
	};

	async showErrorInput<T>(
		value: Object,
		state: T,
		setState: React.Dispatch<React.SetStateAction<T>>
	) {
		const message = await this.validation(value);
		message.map((error) => {
			console.log(state, setState);
		});
	}
}
