import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { firebaseContext } from "../../store/firebaseContext";

const Heart = ({ productId, wishStatus }) => {
    const [source, setSource] = useState("icons/love.png");
    const user = useContext(firebaseContext);
    
    const handleClick = async (event) => {
        event.stopPropagation();
        setSource((prev) => {
            if (prev === "icons/love.png")
                return "icons/love_red.png";
            else
                return "icons/love.png";
        })
        try {
            const docRef = doc(db, "users", user.userId);
            const prevDoc = await getDoc(docRef);
            const prevList = prevDoc.data().wishlist || [];
            if (source === "icons/love.png") {
                await updateDoc(docRef, { wishlist: [...new Set([...prevList, productId])] });
            } else {
                const temp = prevList.filter((id) => id !== productId);
                await updateDoc(docRef, { wishlist: [...temp] });
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <span onClick={handleClick} className="like-btn absolute top-0 right-0 bg-slate-50 p-1 rounded-full flex items-center justify-center m-1">
            <img src={source} alt="" className="w-7" />
        </span>
    )
}

export default Heart;