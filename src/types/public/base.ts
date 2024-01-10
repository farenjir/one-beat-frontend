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
	key: number;
	value: number;
	type: string;
	label: string;
	name: string;
	children?: AppTransformBases[];
	parent?: AppTransformBases;
}

export interface UserChildBase {
	id: number;
	key: number;
	value: number;
	type: string;
	label: string;
	name: string;
	children?: Record<string, AppTransformBases>;
}
