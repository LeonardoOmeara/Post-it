import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
// Actions that occur outside the rendering AKA what doenst render, but run , like data fetching
import { useEffect } from "react";


export default function Login(){

    const route = useRouter();
    // Anytime you need an user, use this below
    const [user, loading] = useAuthState(auth);

    // Google Sign in
    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider)
            route.push("/");
        } catch (error){
            console.log(error)
        }
    };


    // if someone is already loged in, the useEffect let the authentication active if the user already logged in
    useEffect(() => {
        if (user) {
          route.push("/");
        } else {
        //   route.push("/");
            console.log("login");
        }
      }, [user]);



    return(
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium">Join today!</h2>
            <div className="py-4">
                <h3 className="py-4">Sign in with one of the followign providers</h3>
                <button
                onClick={GoogleLogin}
                className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                <FcGoogle className="text-2x1"></FcGoogle>
                Sign in with Google
                </button>
            </div>
        </div>
    )
} 