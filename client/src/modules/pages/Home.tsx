import Navbar from "../common/components/Navbar";
import { useAuthContext } from "../common/store/AuthContext";

const Home = () => {
    const { userDetails } = useAuthContext() as any;

    console.log(userDetails);
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex justify-center mx-auto h-[100%]">
                {/* Sidebar for contacts or chat list */}
                <div className="w-1/3 flex flex-col p-8 bg-gray-800 text-white rounded-lg md:rounded-none border-r">

                    <div>
                        <h2 className="text-lg font-bold mb-4 text-[#e2e5e9] py-4">Chats</h2>
                    </div>

                    <div className="p-4 hover:bg-gray-700 text-[#e2e5e9] cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white">
                        <strong className="text-md">Name of User</strong>
                        <p className="text-xs">Last Message</p>
                    </div>

                    <div className="p-4 hover:bg-gray-700 text-[#e2e5e9]  cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white">
                        <strong className="text-md">Name of User</strong>
                        <p className="text-xs">Last Message</p>
                    </div>

                    <div className="p-4 hover:bg-gray-700 text-[#e2e5e9]  cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white">
                        <strong className="text-md">Name of User</strong>
                        <p className="text-xs">Last Message</p>
                    </div>

                    <div className="p-4 hover:bg-gray-700 text-[#e2e5e9]  cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white">
                        <strong className="text-md">Name of User</strong>
                        <p className="text-xs">Last Message</p>
                    </div>

                    <div className="p-4 hover:bg-gray-700 text-[#e2e5e9]  cursor-pointer transition transform hover:scale-105 rounded-lg hover:text-white">
                        <strong className="text-md">Name of User</strong>
                        <p className="text-xs">Last Message</p>
                    </div>

                </div>

                <div className="min-h-screen flex-grow h-[100%] flex flex-col p-8 bg-gray-800 rounded-lg md:rounded-none">
                  
                    <div className="flex items-center mb-6 hover:bg-gray-700 cursor-pointer max-w-[300px] rounded-lg">
                        <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div> {/* Avatar */}
                        <h2 className="text-lg font-bold text-[#e2e5e9]">Name of the User</h2>
                    </div>

                  
                    <div className="flex flex-col space-y-4 flex-1 overflow-y-auto">
                     
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div> {/* Sender's avatar */}
                            <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
                                <p>Hello! How are you?</p>
                            </div>
                        </div>

                    
                        <div className="flex items-start space-x-3 justify-end">
                            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                                <p>I’m good, thanks! How about you?</p>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div> {/* User's avatar */}
                        </div>
                        
                    </div>

 
                    <div className="mt-6 flex">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-grow p-3 rounded-l-lg bg-gray-700 text-white outline-none "
                        />
                        <button className="bg-blue-500 px-4 py-2 text-white rounded-r-lg ">Send</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
