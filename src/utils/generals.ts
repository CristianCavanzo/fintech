import { validateOrReject } from 'class-validator';
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

	async showErrorInput(value: Object, domReference: HTMLInputElement[]) {
		const message = await this.validation(value);
		message.map((error) => {
			const DOMIncomplete = domReference.find((item) => item.id === error.item);
			if (DOMIncomplete) {
				DOMIncomplete.classList.add('input_error');
				const spanError = document.createElement('p');
				spanError.innerHTML = 'Debes ingresar un valor valido';
				DOMIncomplete.parentNode.appendChild(spanError);
			}
		});
	}
}
