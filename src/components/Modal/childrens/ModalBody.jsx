import React,{ useContext } from "react";
import "../Modal.css"
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../../../store/firebaseContext";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../../../config/firebase";

const ModalBody = () => {
    const navigate = useNavigate();
    const user = useContext(firebaseContext);

    const handleClose = () => {
        navigate('/');
    }
    const handleNavigate = () => {
        navigate('/auth/login')
    }
    const handleGoogleAuth = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            user.handleUser(result.user.displayName);
            navigate('/');
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="modal-content">
            <div className="close-btn w-full text-end">
                <button onClick={handleClose}><img src="icons/close.png" alt="" className="w-6" /></button>
            </div>
            <div className="img-slider">
                <div className="arrow-left">
                    <img src="icons/left.png" alt="" className="w-6" />
                </div>
                <div className="content">
                    <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" alt="" className="w-24" />
                    <h4 className="text-center font-medium text-base">Help us become one of the safest place to buy and sell</h4>
                </div>
                <div className="arrow-right">
                    <img src="icons/left.png" alt="" className="w-6 rotate-180" />
                </div>
            </div>
            <div className="btn-phone">
                <img src="icons/smartphone-call.png" alt="" className="w-6" />
                <span>Continue with phone</span>
            </div>
            <div className="btn-google" onClick={handleGoogleAuth}>
                <div className="flex items-center justify-center gap-2">
                    <img src="icons/user.png" alt="" className="w-8 h-8" />
                    <div className="text flex flex-col place-items-start">
                        <span className="text-xs font-normal">continue as user</span>
                        <span className="text-xs font-medium">usernameckc@gmail.com</span>
                    </div>
                </div>
                <img src="icons/search.png" alt="" className="w-8 h-8" />
            </div>
            <div className="btn-email">
                <span className="font-medium text-sm">OR</span>
                <h4 className="cursor-pointer font-medium text-sm underline" onClick={handleNavigate}>Login with Email</h4>
            </div>
            <div className="bottom-desc">
                <span>All your personal details are safe with us.</span>
                <span className="text-center">If you continue, you are accepting
                    <span className="text-blue-500"> OLX Terms and Conditions and Privacy Policy</span>
                </span>
            </div>
        </div>
    )
}


export default ModalBody;