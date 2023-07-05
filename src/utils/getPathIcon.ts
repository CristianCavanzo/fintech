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
	} catch (error: unknown) {
		if (Array.isArray(error)) {
			const errorClassValidator: ErrorClassValidator[] = error;
			console.log(errorClassValidator[0].value);
		}
	}
};
