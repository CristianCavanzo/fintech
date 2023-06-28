import React, { FC } from 'react';
import { IconProps } from 'types';
const Password: FC<IconProps> = ({ width, height, color = '#000' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={width} height={height}>
			<path
				fill={color}
				d="M80-200v-61h800v61H80Zm38-254-40-22 40-68H40v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 22-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Z"
			/>
		</svg>
	);
};

export { Password };
