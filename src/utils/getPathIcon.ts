import { Email } from '@components/icons/Email';
import { Password } from '@components/icons/Password';
import { validateOrReject } from 'class-validator';
import { ErrorClassValidator, nameIcons } from 'types';

const iconsPath = {
	email: Email,
	password: Password,
};
export const getPathIcon = (nameIcon: nameIcons) => iconsPath[nameIcon] || Email;
export const validation = async (value: Object) => {
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
			console.log(messages);
			return messages;
		}
	}
};
