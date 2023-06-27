import { Email } from '@components/icons/Email';
import { nameIcons, Icons } from 'types';
const iconsPath: Icons[] = [
	{
		name: 'email',
		path: Email,
	},
];
export const getPathIcon = (nameIcon: nameIcons) =>
	iconsPath.find((icon) => icon.name === nameIcon).path;
