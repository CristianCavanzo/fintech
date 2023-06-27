import React from 'react';

export type nameIcons = 'email' | 'password';
export interface Icons {
	name: nameIcons;
	// eslint-disable-next-line no-unused-vars
	path: React.ComponentType<IconProps>;
}

export interface IconsMeasures {
	width: number;
	height: number;
}

export interface IconProps extends IconsMeasures {
	color?: string;
}
