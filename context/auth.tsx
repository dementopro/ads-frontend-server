import { createContext, useContext, useEffect, useState } from "react"
import {useSession, getSession} from 'next-auth/react'
interface AuthUserInterface {
    email: any | undefined;
}
interface AuthContextInterface {
    user: AuthUserInterface | undefined | null;
    loading: boolean | undefined;
    setLoading: any;
    setUser: any;
}
const initState:AuthContextInterface = {
    user: null,
    loading: false,
    setLoading: null,
    setUser: null,
}
const AuthContext = createContext<AuthContextInterface> ({...initState})

export const useAuthContext = () => useContext (AuthContext)

export default function AuthContextProvider ({children}:{children:React.ReactNode}) {
    const [user, setUser] = useState<AuthUserInterface| null> ()
    const [loading, setLoading] = useState (true)
    const {data: session, status} = useSession ()
    const [jwt, setJwt] = useState('');

    useEffect (()=>{
        if (status == 'authenticated') {
            setLoading (false)
            setUser ({
                email: session.user?.email,
            });
            // setJwt (session.user.)
        } else if (status == 'loading') {
            setLoading (true)
            setUser (null)
        } else if (status == 'unauthenticated') {
            setLoading (false)
            setUser (null)
        }
    },[session, status])
    return (
        <AuthContext.Provider value={{user, loading, setUser, setLoading}}>
            {loading?<></>:children}
        </AuthContext.Provider>
    )
}