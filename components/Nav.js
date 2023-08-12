import Link from "next/link";

export default function Nav(){
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href='/'>
                <button>Post-It</button>
            </Link>
            <ul>
                <Link href={'/auth/login'}>
                    <p>Join Now</p>
                </Link>
            </ul>
        </nav>
    );
}