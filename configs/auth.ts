import {AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from '@/models/User'


export const authConfig: AuthOptions = ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true, placeholder: 'test1234@mail.ru' },
        password: { label: "password", type: "password", required: true },
        
      },

      async authorize(credentials: any ) {
        await connect();
        if (!credentials || !credentials.email || !credentials.password)
        return null

        // метод 2
        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error();
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/signin'
  },
});
