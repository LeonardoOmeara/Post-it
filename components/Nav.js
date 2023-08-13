import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Nav(){

    const [user, loading] = useAuthState(auth);
    console.log(user);

    return(
        
        <nav className="flex justify-between items-center py-10 px-3">
            
            <Link href='/'>
                <button className="text-lg font-medium">Post-It</button>
            </Link>
            <ul className="flex items-center gap-10">
            {!user && (
                <Link href={'/auth/login'}>
                    <div className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
                    Join Now
                    </div>
                </Link>
                )}
            {user && (
                <div className="flex items-center gap-8 text-sm">
                    <Link href={'/post'}>
                        <div className= "bg-slate-950 text-white p-4">Start posting</div>
                    </Link>
                    <Link href={'/dashboard'}>
                        <img
                         src={user.photoURL}
                         className="w-10 rounded-full cursor-pointer"/>
                        {/* <div className= "bg-slate-950 text-white p-4">Dashboard</div> */}
                    </Link>
                </div>
            )}
            </ul>
        </nav>
    );
}