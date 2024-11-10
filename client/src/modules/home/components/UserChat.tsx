import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../common/store/AuthContext";
import { getUserData } from "../service";
import { Spin } from "antd";
import { useChatContext } from "../store";
import React from "react";
import { ChatData } from "../../common/type";

interface UserChatInterface {
    chat: ChatData;
}

const UserChat: React.FC<UserChatInterface> = ({ chat }) => {
    const { userDetails,   } = useAuthContext() as any;
    const {setCurrentChatId, currentChatId, setActiveRecipientDetails} = useChatContext() as any;
    const recipientUserId = chat?.members.find((id: string) => id != userDetails._id);

    const { data: recipientUserData, isLoading: isLoadingReceipientUserData } = useQuery({
        queryKey: ['recipientUser', recipientUserId],
        queryFn: () => getUserData(recipientUserId)
    });

    const handleSetRecipientDetails = ({id, data}: any) => {
        setActiveRecipientDetails(data)
        setCurrentChatId(id)
    }


    return (
        <div
        key={chat._id}
        onClick={() => handleSetRecipientDetails({id: chat._id, data: recipientUserData})}
        className={`p-4 cursor-pointer transition transform rounded-lg 
            ${currentChatId === chat._id ? 'bg-gray-700 text-white' : 'text-[#e2e5e9] hover:bg-gray-700 hover:text-white hover:scale-105 '}`}
    >
        {isLoadingReceipientUserData ? (
            <Spin />
        ) : (
            <>
                <strong className="text-md">{recipientUserData.name}</strong>
                <p className="text-xs">Last Message</p>
            </>
        )}
    </div>

    )
}

export default UserChat;