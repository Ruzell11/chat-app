import { createContext, useContext, useState } from "react";
import { ContextProviderChildren } from "../common/type";
import { useQuery } from "@tanstack/react-query";
import { getUserChats } from "./service";
import { useAuthContext } from "../common/store/AuthContext";

const ChatContext = createContext(null);

const ChatContextProvider: React.FC<ContextProviderChildren> = ({ children }) => {

    const { userDetails } = useAuthContext() as any;
   
    const { data: chatsData, isLoading: isLoadingChats, isError: isErrorChats } = useQuery({
        queryKey: ['chats', userDetails._id], 
        queryFn: () => getUserChats(userDetails._id),
    });
    

    return (
        <ChatContext.Provider value={{ chatsData, isLoadingChats, isErrorChats }}>
            {children}
        </ChatContext.Provider>
    )
}


const useChatContext = () => useContext(ChatContext);



export { ChatContext, ChatContextProvider, useChatContext }