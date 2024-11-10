import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../common/store/AuthContext";
import { getUserData } from "../service";
import { Spin } from "antd";

const UserChat = ({ chat }) => {
    const { userDetails } = useAuthContext() as any;
    const recipientUserId = chat?.members.find((id: string) => id != userDetails._id);

    const { data: recipientUserData, isLoading: isLoadingReceipientUserData } = useQuery({
        queryKey: ['recipientUser', recipientUserId],
        queryFn: () => getUserData(recipientUserId),
    });

    return (
        <div
            key={chat._id}
            className="p-4 hover:bg-gray-700 text-[#e2e5e9] cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white"
        >
            {
                isLoadingReceipientUserData ? <Spin /> : 
                <>
                    <strong className="text-md">{recipientUserData.name}</strong>
                    <p className="text-xs">Last Message</p></>
            }
        </div>

    )
}

export default UserChat;