import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthContext } from "../store/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { setUserDetails } = useAuthContext() as any;

    const onLogout = () => {
        navigate('/')
        Cookies.remove('user');
        setUserDetails({})
    }

    return (
        <section className="flex justify-between items-center bg-black p-5">
            <div className="text-xl text-white">Qps Chat App Exclusive</div>

            <ul>
                <li className="text-white cursor-pointer" onClick={onLogout}>Logout</li>
            </ul>
        </section>
    )
}

export default Navbar;