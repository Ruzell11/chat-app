
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ContextProviderChildren } from "../type";

const AuthContext = createContext<any>(null);


const AuthContextProvider: React.FC<ContextProviderChildren> = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const userCookie = Cookies.get("user")
    

    useEffect(() => {
        if (userCookie) {
            setUserDetails(JSON.parse(userCookie));
        }
    }, [])
    

    return (
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails,
            userCookie
        }}>{children}</AuthContext.Provider>
    )
    
};

const useAuthContext = () => useContext(AuthContext)

// Export both AuthContext and AuthContextProvider
export { AuthContext, AuthContextProvider, useAuthContext };
