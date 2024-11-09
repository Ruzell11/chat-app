import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/')
    }
    return (
        <section className="flex justify-between items-center bg-black p-5">
            <div className="text-xl text-white">Chat App Exclusive</div>

            <ul>
                <li className="text-white cursor-pointer" onClick={onLogout}>Logout</li>
            </ul>
        </section>
    )
}

export default Navbar;