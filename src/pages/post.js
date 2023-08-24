import { auth, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";


export default function Post(){

    // Form state
    const [post, setPost] = useState({ description: ""});
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
   
    // console.log("hola");
    // console.log(user);
    // console.log("hola");

    // Submit post
    const submitPost = async (e) => {
        e.preventDefault();// Prevents the form from being submitted and page refresh

        // first, validate if post its correct to submit with this checks

        if(!post.description){
            toast.error("Description it's empty :(", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1300});
            // if i dont put the return here, the page will refresh
            return;
        }
        //create the condition where if the post lenght is more than 300 characters, use toast.error and limit the max lenght in the textarea  to 300;
        if (post.description.length > 300){
            toast.error("Description it's too long :$", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1300});
                
                // setPost({ description: ""});
            return;

        }
        

        const collectionRef = collection(db, "posts");
        await addDoc(collectionRef, {
            // Spread operator include all the properties of the post object
            ...post,
            timestamp: serverTimestamp(),
            user: user.uid,
            photo: user.photoURL,
            username: user.displayName
        })
        // Clean the post textarea and redirect to the main page
        setPost({ description: ""});
        return router.push("/");
    }

    return (
        <div className="my-20 py-10 shadow-lg rounded-lg max-w-md mx-auto">
            {/* This submit post prevents the page to refresh, just upload the content */}
            <form onSubmit={submitPost}>
                <h1 className="text-2x1 font-bold">Create a new post</h1>
                {/* <div>{post.description}</div> */}
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Description</h3>
                    <textarea
                        value = {post.description}
                        onChange={(e) => setPost({ ...post, description: e.target.value})}
                        className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm"></textarea>
                    <p className={ `text-cyan-600 font-medium text-sm ${
                        post.description.length > 300 ? "text-red-600" : " "
            }`}
            >
                
                    {post.description.length}/300</p>
                </div>
                <button 
                type="submit"
                className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm">Submit</button>
            </form>
        </div>
    )
}