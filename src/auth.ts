import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {

        console.log(">>> check credentials: ", credentials);

       
        // call backend
        const email:string =  credentials.email as string;
        const password:string =  credentials.password as string;
        

        let userLogin:UserLogin = {
          email: email,
          password: password
        };

        const res = await fetch("https://run.mocky.io/v3/031f8bf5-7d38-42ca-9d86-6885bf018579", {
          method: "GET",
          headers: {
            'Accept': 'application/json' // Thêm tiêu đề để yêu cầu JSON
          },
        });
        const data:User[] = await res.json();
        
        let foundUser = null
        foundUser = data.find(user => user.email === userLogin.email && user.password === userLogin.password);

        if (!foundUser) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }

        // return user object with their profile data
        return foundUser
      },
    }),
  ],
  pages: {
    signIn: "/assignment8",
  },
})