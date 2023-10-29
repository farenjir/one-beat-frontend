export interface AppBases {
	id: number;
	type: string;
	name: string;
	nameFa: string;
	children?: AppBases[];
	parent?: AppBases;
}
