export interface AppBases {
	id: number;
	type: string;
	enName: string;
	faName: string;
	children?: AppBases[];
	parent?: AppBases;
}

export interface AppTransformBases {
	id: number;
	key: string;
	type: string;
	label: string;
	name: string;
	children?: AppTransformBases[];
	parent?: AppTransformBases;
}
