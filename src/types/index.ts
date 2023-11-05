import { Roles } from "./enums";
import type {
	GenerateMetaProps,
	PropsWithParams,
	PropsWithDice,
	IParams,
	IDir,
	ILocale,
	ILocaleOptions,
} from "./configs";

import type { IUser } from "./public/user";
import type { AppBases } from "./public/base";
import type { IVersion } from "./public/version";

// configs
export type { GenerateMetaProps, PropsWithParams, PropsWithDice, IParams, IDir, ILocale, ILocaleOptions };

// data types
export type { IUser, AppBases, IVersion };

// app enums
export { Roles };
