import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Nav(){

    const [user, loading] = useAuthState(auth);

    return(
        <nav className="flex justify-between items-center py-10">
            <Link href='/'>
                <button className="text-lg font-medium">Post-It</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href={'/auth/login'}>
                    <div className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</div>
                </Link>
            </ul>
        </nav>
    );
}