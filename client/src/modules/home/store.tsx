import { createContext, useContext, useState } from "react";
import { ContextProviderChildren } from "../common/type";
import { useQuery } from "@tanstack/react-query";
import { getMessages, getUserChats } from "./service";
import { useAuthContext } from "../common/store/AuthContext";

const ChatContext = createContext<any>(null);

const ChatContextProvider: React.FC<ContextProviderChildren> = ({ children }) => {
    const [activeRecipientDetails, setActiveRecipientDetails] = useState({})

    const [currentChatId, setCurrentChatId] = useState<string>("");
    const { userDetails } = useAuthContext() as any;

    const { data: chatsData, isLoading: isLoadingChats, isError: isErrorChats } = useQuery({
        queryKey: ['chats', userDetails._id],
        queryFn: () => getUserChats(userDetails._id),
    });

    const { data: messagesData } = useQuery({
        queryKey: ['messages', currentChatId],
        queryFn: () => getMessages(currentChatId),
    });


    return (
        <ChatContext.Provider value={{ chatsData, isLoadingChats, isErrorChats, currentChatId, setCurrentChatId, messagesData, activeRecipientDetails, setActiveRecipientDetails }}>
            {children}
        </ChatContext.Provider>
    )
}


const useChatContext = () => useContext(ChatContext);



export { ChatContext, ChatContextProvider, useChatContext }