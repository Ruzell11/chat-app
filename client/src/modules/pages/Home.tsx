import Navbar from "../common/components/Navbar";
import Chat from "../home";
import { ChatContextProvider } from "../home/store";

const Home = () => {
    return (
       <ChatContextProvider>
            <Navbar />
            <Chat/>
        </ChatContextProvider>
    );
}

export default Home;
