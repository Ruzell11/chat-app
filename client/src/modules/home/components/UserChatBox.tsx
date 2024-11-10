import { useAuthContext } from "../../common/store/AuthContext";
import { useChatContext } from "../store";

interface Message {
    _id: string;
    chatId: string;
    senderId: string;
    text: string;
    createdAt: string;
    updatedAt: string; 
    __v: number;
  }

const UserChatBox = () => {
    const { messagesData } = useChatContext(); 
    const {userDetails} = useAuthContext();
    
    const currentUserId = userDetails._id;

    return (
        <div className="flex flex-col space-y-4 flex-1 overflow-y-auto p-4">
            {messagesData?.map((message: Message) => (
                <div
                    key={message._id}
                    className={`flex items-start space-x-3 ${
                        message.senderId === currentUserId ? "justify-end" : ""
                    }`}
                >
                    {/* If sender is not the current user, show avatar on left */}
                    {message.senderId !== currentUserId && (
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    )}

                    <div
                        className={`p-3 rounded-lg max-w-xs ${
                            message.senderId === currentUserId
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-white"
                        }`}
                    >
                        <p>{message.text}</p>
                    </div>

                    {message.senderId === currentUserId && (
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserChatBox;
