import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Product = () => {
    const [query] = useSearchParams();
    const [product, setProduct] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        handleFetchDoc();
    }, []);
    const handleFetchDoc = async () => {
        try {
            const id = query.get('id');
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct(docSnap.data());
                const userId = docSnap.data().userId;
                const userDocRef = doc(db, "users", userId);
                const userDocSnap = await getDoc(userDocRef);
                if(userDocSnap.exists()){
                    setUser(userDocSnap.data());
                } else {
                    throw "user doesn't exist";
                }
            } else {
                throw "doc is not exist";
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="w-full h-screen flex px-12 py-10 gap-4 bg-slate-100">
            <div className="img-container w-[60%] p-20 bg-white shadow-xl">
                <img src={product?.imageUrl} alt="" className="w-full" />
            </div>
            <div className="details-container w-[40%] flex flex-col gap-4">
                <div className="product-details w-full shadow-xl flex flex-col items-start px-4 py-8 bg-white">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-2xl">₹. {product?.price}</h2>
                        <img src="/icons/love.png" alt="" className="w-8" />
                    </div>
                    <h2 className="text-lg font-normal mt-2">{product?.title}</h2>
                    <p className="text-xs font-light">{product?.description}</p>
                </div>
                <div className="user-details w-full shadow-xl flex flex-col items-start px-4 py-8 gap-2 bg-white">
                    <div className="w-full flex items-center justify-between px-4 py-4 border rounded">
                        <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" className="w-8"/>
                        <h2>{user?.username}</h2>
                        <img src="/icons/left.png" alt="" className="rotate-180 w-8" />
                    </div>
                    <button className="w-full py-2 px-4 text-sm border-2 rounded">Chat with seller</button>
                </div>
            </div>
        </div>
    )
}

export default Product;