import { UserContext } from "../Context/userContext";
import { useContext } from "react";

export function useUser() {

    const User = useContext(UserContext);

    return User;
         
}