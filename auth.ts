import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDB } from "@/lib/dbconnect";
import User from "@/models/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
  ],
  callbacks: {
    async session({ session }) {
      await connectToDB();

      const currentUser = await User.findOne({ email: session?.user?.email });

      if (currentUser) {
      session.user.id = currentUser._id.toString();
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // Check if user exists in the database
        const userExists = await User.findOne({ email: profile?.email });

        if (userExists) {
          console.log("User already exists");
        }
        
        // If user does not exist, create a new user
          if (!userExists) {
            await User.create({
            email: profile?.email,
            username: profile?.login,
            image: profile?.avatar_url,
          });
          console.log("New user created");
        }
        // Allow the sign-in process to continue
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        // Ensure any error still returns false to prevent authentication issues
        return false;
      }
    },
  },
});
