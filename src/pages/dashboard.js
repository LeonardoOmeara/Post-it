import { auth } from "../../utils/firebase";
// tracking the user state
import { useAuthState } from "react-firebase-hooks/auth";
// navigate to other routes
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


// Restrict the user to see the dashboard if not logged in


// Esta construcción es útil en situaciones en las que deseas evitar que el componente continúe con su proceso normal de renderizado hasta que la información necesaria (en este caso, el estado de autenticación) se haya cargado por completo.
export default function Dashboard(){

    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    const getData = async ()=> {
        if (loading) return;
    // If we dont have an user, send them to the login 
        if (!user) return route.push('/auth/login');
    }

    // get user data
    useEffect( ()=> {
        getData();
        // In this case, the effect will only run when the values of user or loading change. If neither user nor loading changes, the effect won't be triggered.
        // So, if we try to get to the / dashboard url just typing it, this will not allow it to  happend end send him to login.js
    }, [user, loading]);

    
// si no se usa useEffect se renderiza esto que esta aca abajo
    return(
        <div>
            <h1>Your post</h1>
            <h1>Feed</h1>
            <button onClick={ ()=> auth.signOut() }>Sign-out</button>
        </div>
    )
}