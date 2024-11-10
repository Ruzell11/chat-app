import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../service";
import { useState } from "react";
import { useAuthContext } from "../../common/store/AuthContext";
import { useChatContext } from "../store";

const UserChatForm = () => {
    const [message, setMessage] = useState<string>("");
    const { userDetails } = useAuthContext();
    const { currentChatId } = useChatContext();
    const queryClient = useQueryClient()

    const sendMessageMutation = useMutation({
        mutationFn: sendMessage,
        onSuccess: () => { },
    })

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = {
            chatId: currentChatId,
            senderId: userDetails._id,
            text: message
        }

        sendMessageMutation.mutate(params, {
            onSuccess: () => {
                if (message.trim()) {
                    queryClient.invalidateQueries('messages');
                    console.log("Message sent:", message);
                    setMessage("");
                }
            }
        })

    };

    return (
        <form onSubmit={onSubmit} className="mt-6 flex">
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={handleMessageChange}
                className="flex-grow p-3 rounded-l-lg bg-gray-700 text-white outline-none"
                autoFocus
            />
            <button
                type="submit"
                className="bg-blue-500 px-4 py-2 text-white rounded-r-lg"
            >
                Send
            </button>
        </form>
    )
}

export default UserChatForm;
