
import { createContext, ReactNode, useContext, useState } from "react";


const AuthContext = createContext(null);
interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});

    return (
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails
        }}>{children}</AuthContext.Provider>
    )
    
};

const useAuthContext = () => useContext(AuthContext)

// Export both AuthContext and AuthContextProvider
export { AuthContext, AuthContextProvider, useAuthContext };
