import type * as Configs from "./configs";

import type { IUser } from "./public/user";
import type { AppBases, AppTransformBases, UserChildBase } from "./public/base";
import type { IVersion } from "./public/version";
import type { IProduct } from "./public/product";

// configs
export type TypeApi = Configs.TypeApi;
export type GenerateMetaProps = Configs.GenerateMetaProps;
export type PropsWithParams = Configs.PropsWithParams;
export type PropsWithDict = Configs.PropsWithDict;
export type IParams = Configs.IParams;
export type IDir = Configs.IDir;
export type ILocale = Configs.ILocale;
export type PropsWithLocale = Configs.PropsWithLocale;
export type ILocaleOptions = Configs.ILocaleOptions;

// data types
export type { AppBases, AppTransformBases, UserChildBase, IVersion, IUser, IProduct };
