import React, { useContext} from "react";
import "../Modal.css"
import { useNavigate } from "react-router-dom";
import { useFormInput } from "../../../hooks/useFormInput";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseContext } from "../../../store/firebaseContext";

const Login = () => {
    const navigate = useNavigate();
    const user = useContext(firebaseContext);
    const [form, setForm] = useFormInput({
        email:'',
        password:'',
    })

    const handleClose = () => {
        navigate('/');
    }
    const handleNavigate = () => {
        navigate('/auth/signup')
    }
    const handleBackNavigate = () => {
        navigate(-1);
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, form.email, form.password);
            user.handleUser(auth.currentUser.displayName);
            navigate('/');
        }catch(err) {
            console.log(err);
        }
    }
    return(
        <div className="modal-content">
            <div className="close-btn w-full flex items-center justify-between">
                <button onClick={handleBackNavigate}><img src="../../../public/icons/arrow.png" alt="" className="w-6" /></button>
                <button onClick={handleClose}><img src="../../../public/icons/close.png" alt="" className="w-6" /></button>
            </div>
            <div className="form-container w-full flex flex-col gap-10">
                <h4 className="w-full text-center font-medium text-xl">Log In</h4>
                <form action="" className="flex flex-col w-full gap-4" onSubmit={handleFormSubmit}>
                    <input type="text" name="email" value={form.email} placeholder="Email" onChange={setForm} className="w-full border-2 border-black rounded px-4 py-2" />
                    <input type="password" name="password" value={form.password} placeholder="Password" onChange={setForm} className="w-full border-2 border-black rounded px-4 py-2" />
                    <button type="submit" className="text-center bg-slate-800 rounded font-medium py-2 text-white">submit</button>
                </form>
            </div>
            <div className="bottom-desc">
                <span className="text-center">Don't have an account,
                    <span className="text-blue-500 cursor-pointer" onClick={handleNavigate}> Register ?</span>
                </span>
            </div>
        </div>
    )
}

export default Login;