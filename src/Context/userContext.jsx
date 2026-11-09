import { useEffect, useState, createContext} from "react";
import { supabase } from "../supabase/supabase";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // async function getUser() {

            const { data: listener } 
            = supabase.auth.onAuthStateChange((event,session) =>{
                setUser(session?.user ?? null)
            });

        // getUser();
        return()=>{
            listener.subscription.unsubscribe()
        }
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}

