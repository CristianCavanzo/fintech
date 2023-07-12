import { Email } from '@components/icons/Email';
import { Password } from '@components/icons/Password';
import { nameIcons } from 'types';

const iconsPath = {
	email: Email,
	password: Password,
};
export const getPathIcon = (nameIcon: nameIcons) => iconsPath[nameIcon] || Email;
