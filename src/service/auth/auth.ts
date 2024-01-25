import NextAuth from "next-auth";

import authConfig from "./auth.config";
import { currentUser } from "./auth.services";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	session: { strategy: "jwt" },
	pages: {
		signIn: "/auth",
		error: "/auth/error",
	},
	// events: {
	// 	async linkAccount({ user }) {
	// 		await db.user.update({
	// 			where: { id: user.id },
	// 			data: { emailVerified: new Date() },
	// 		});
	// 	},
	// },
	callbacks: {
		async signIn({ user, account }) {
			// allow google without email verification
			if (account?.provider !== "credentials") return true;
			// current user
			const existingUser = await currentUser();
			// check confirmed user
			if (existingUser?.kyc?.userKyc) {
				return true;
			} else {
				return false;
			}
		},
		async session({ session, trigger, newSession }) {
			// if (token.sub && session.user) {
			// 	session.user.id = token.sub;
			// }

			// if (token.role && session.user) {
			// 	// session.user.role = token.role as UserRole;
			// }

			// if (session.user) {
			// 	// session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
			// }

			// if (session.user) {
			// 	session.user.name = token.name;
			// 	session.user.email = token.email;
			// 	// session.user.isOAuth = token.isOAuth as boolean;
			// }

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			// const existingUser = await getUserById(token.sub);

			// if (!existingUser) return token;

			// const existingAccount = await getAccountByUserId(existingUser.id);

			// token.isOAuth = !!existingAccount;
			// token.name = existingUser.name;
			// token.email = existingUser.email;
			// token.role = existingUser.role;
			// token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

			return token;
		},
	},
});
