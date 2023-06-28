import React from 'react';

export type nameIcons = 'email' | 'password';
export interface Icons {
	name: nameIcons;
	path: React.ComponentType<IconProps>;
}

export interface IconsMeasures extends React.SVGProps<SVGSVGElement> {
	width: number;
	height: number;
}

export interface IconProps extends IconsMeasures {
	color?: string;
}
