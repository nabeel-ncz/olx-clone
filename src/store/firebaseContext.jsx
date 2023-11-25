import React, { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const firebaseContext = createContext(null);
export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getDoc(doc(db, "users", user.uid)).then((result) => {
                    const list = result.data().wishlist;
                    setUser({
                        name: user.displayName,
                        userId: user.uid,
                        wishlist: list,
                    })
                })
            }
            else {
                setUser(null);
            }
        })
    }, [user]);
    const handleUser = (val) => {
        setUser(val);
    }
    return (
        <firebaseContext.Provider value={{ name: user?.name, userId: user?.userId, handleUser, wishlist: user?.wishlist }}>
            {children}
        </firebaseContext.Provider>
    )
}
