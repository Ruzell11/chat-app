import { Spin } from "antd";
import { useChatContext } from "./store";
import UserChat from "./components/UserChat";
import UserChatHeader from "./components/UserChatHeader";
import UserChatBody from "./components/UserChatBody";

const Chat = () => {
    const { chatsData, isLoadingChats, isErrorChats } = useChatContext() as any;

    return (
        <div className="min-h-screen flex justify-center mx-auto h-[100%]">

            <div className="w-1/3 flex flex-col p-8 bg-gray-800 text-white rounded-lg md:rounded-none border-r space-y-3">
                <UserChatHeader chatsData={chatsData} />
                {
                    isLoadingChats ? (
                        <Spin />
                    ) : chatsData.length > 0 ? (
                        chatsData.map((chat: any) => <UserChat chat={chat} key={chat._id} />)
                    ) : null
                }
            </div>
            <UserChatBody />
        </div>
    )
}

export default Chat;