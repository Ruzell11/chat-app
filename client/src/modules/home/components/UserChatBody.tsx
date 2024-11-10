import UserChatBodyHeader from "./UserChatBodyHeader";
import UserChatBox from "./UserChatBox";
import UserChatForm from "./UserChatForm";

const UserChatBody = () => {

    return (
        <div className="min-h-screen flex-grow h-[100%] flex flex-col p-8 bg-gray-800 rounded-lg md:rounded-none">
            <UserChatBodyHeader/>
            <UserChatBox />
            <UserChatForm />
        </div>
    )
}

export default UserChatBody;