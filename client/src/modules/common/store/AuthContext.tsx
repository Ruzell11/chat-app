
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);
interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
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
