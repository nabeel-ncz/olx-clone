import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Header.css"
import Modal from "../Modal/Modal";
import Tooltip from "../Tooltip/Tooltip"
import { useContext } from "react";
import { firebaseContext } from "../../store/firebaseContext";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import ProfileTooltip from "../ProfileTooltip/ProfileTooltip";

const Header = () => {
    const navigate = useNavigate();
    const user = useContext(firebaseContext);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isProfileClicked, setIsProfileClicked] = useState(false);

    const handleOpen = () => {
        navigate('/auth');
    }
    const handleLanguage = () => {
        setIsLangOpen(prev => !prev);
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log('signout');
        })
    }
    const handleProfile = () => {
        setIsProfileClicked(prev => !prev);
    }
    
    return (
        <>
            <div className="header-container z-50">
                <div className="logo">
                    <img src="images/olx_logo.png" alt="" className="w-12 lg:w-32 md:w-12" />
                </div>
                <div className="location-container">
                    <img src="icons/loupe.png" alt="" className="w-4" />
                    <input type="text" placeholder="location..." />
                    <img src="icons/down-arrow.png" alt="" className="w-4" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder="search...." />
                    <div className="search-btn">
                        <img src="icons/loupe.png" alt="" className="w-4" />
                    </div>
                </div>
                <div className="lang-selector relative cursor-pointer" onClick={handleLanguage}>
                    <h4>English</h4>
                    <img src="icons/down-arrow.png" alt="" className={`w-8 ${isLangOpen && "rotate-180"} transition duration-500 ease-in-out`} />
                    {isLangOpen && <Tooltip />}
                </div>
                <div className="login-btn">
                    {
                        user?.name
                        ? 
                        <div className="user-profile flex gap-2 items-center justify-center" onClick={handleProfile}>
                            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" className="w-8" />
                            <img src="icons/down-arrow.png" alt="" className={`w-8 ${isProfileClicked && "rotate-180"} transition duration-500 ease-in-out`} />
                            {isProfileClicked && <ProfileTooltip handleLogout={handleLogout} username={user.name} userId={user.userId} />}
                        </div>
                        : <button className="underline underline-offset-2" onClick={handleOpen}>Login</button>
                    }
                </div>
                <div className="sell-btn cursor-pointer" onClick={() => navigate('/sell')}>
                    <span>Sell</span>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Header;