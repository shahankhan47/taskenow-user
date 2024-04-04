import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";



export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: ''
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (user && user.id) {
        session.user = { ...session.user, id: user.id } as {
          id: string;
          name: string;
          email: string;
        };
      }
      return session;
    },
  },
  secret:'Secret',
};
