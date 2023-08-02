// import { signIn, signOut, useSession } from "next-auth/react";

const LoginPage = () => {
  // const { data: session } = useSession();

  // const handleGoogleLogin = async () => {
  //   const response = await signIn("google");
  //   if (response?.error) {
  //     console.error(response.error);
  //   }
  // };

  // const handleGitHubLogin = async () => {
  //   const response = await signIn("github");
  //   if (response?.error) {
  //     console.error(response.error);
  //   }
  // };

  // const handleLogout = async () => {
  //   const response = await signOut();
  //   if (response?.error) {
  //     console.error(response.error);
  //   }
  // };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Sign in to your account
    //       </h2>
    //       {session ? (
    //         <button
    //           onClick={handleLogout}
    //           className="mt-8 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    //         >
    //           Sign out
    //         </button>
    //       ) : (
    //         <>
    //           <button
    //             onClick={handleGoogleLogin}
    //             className="mt-8 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //           >
    //             Sign in with Google
    //           </button>
    //           <button
    //             onClick={handleGitHubLogin}
    //             className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
    //           >
    //             Sign in with GitHub
    //           </button>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <h1>Login page</h1>
  );
};

export default LoginPage;
