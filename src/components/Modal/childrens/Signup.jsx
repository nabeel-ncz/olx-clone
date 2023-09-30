import React, { useContext } from "react";
import "../Modal.css"
import { useNavigate, useOutletContext } from "react-router-dom";
import { useFormInput } from "../../../hooks/useFormInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { firebaseContext } from "../../../store/firebaseContext";

const Signup = () => {
    const navigate = useNavigate();
    const user = useContext(firebaseContext);
    const [form, setForm] = useFormInput({ username: '', email: '', phone: '', password: '' });

    const handleClose = () => {
        navigate('/');
    }
    const handleNavigate = () => {
        navigate('/auth/login')
    }
    const handleBackNavigate = () => {
        navigate(-1);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
            await updateProfile(auth.currentUser, { displayName: form.username });
            const data = {
                username: form.username,
                email: form.email,
                phone: form.phone,
            }
            await setDoc(doc(db, "users", userCredential.user.uid), data);
            user.handleUser(userCredential.user.displayName);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="modal-content">
            <div className="close-btn w-full flex items-center justify-between">
                <button onClick={handleBackNavigate}><img src="../../../public/icons/arrow.png" alt="" className="w-6" /></button>
                <button onClick={handleClose}><img src="../../../public/icons/close.png" alt="" className="w-6" /></button>
            </div>
            <div className="form-container w-full flex flex-col gap-10">
                <h4 className="w-full text-center font-medium text-xl">Register</h4>
                <form action="" className="flex flex-col w-full gap-4" onSubmit={handleFormSubmit}>
                    <input type="text" name="username" value={form.username} onChange={setForm} placeholder="Username" className="w-full border-2 border-black rounded px-4 py-2" />
                    <input type="text" name="email" value={form.email} onChange={setForm} placeholder="Email" className="w-full border-2 border-black rounded px-4 py-2" />
                    <input type="text" name="phone" value={form.phone} onChange={setForm} placeholder="Phone" className="w-full border-2 border-black rounded px-4 py-2" />
                    <input type="text" name="password" value={form.password} onChange={setForm} placeholder="Password" className="w-full border-2 border-black rounded px-4 py-2" />
                    <button type="submit" className="text-center bg-slate-800 rounded font-medium py-2 text-white">submit</button>
                </form>
            </div>
            <div className="bottom-desc">
                <span className="text-center">Already have an account,
                    <span className="text-blue-500 cursor-pointer" onClick={handleNavigate}> Log In ?</span>
                </span>
            </div>
        </div>
    )
}

export default Signup;