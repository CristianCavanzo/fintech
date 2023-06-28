import React, { FC } from 'react';
import { IconProps } from 'types';
const Email: FC<IconProps> = ({ width, height, color = '#000', ...otherProps }) => {
	console.log(otherProps);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			width={width}
			height={height}
			{...otherProps}
		>
			<path
				fill={color}
				d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
			/>
		</svg>
	);
};

export { Email };