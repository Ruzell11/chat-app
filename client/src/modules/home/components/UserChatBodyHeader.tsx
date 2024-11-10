import { useChatContext } from "../store";

const UserChatBodyHeader = () => {
    const { activeRecipientDetails } = useChatContext();
    return (
        <div className="flex items-center mb-6 hover:bg-gray-700 cursor-pointer max-w-[300px] rounded-lg">
            <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
            <h2 className="text-lg font-bold text-[#e2e5e9]">{activeRecipientDetails.name}</h2>
        </div>

    )
}

export default UserChatBodyHeader;