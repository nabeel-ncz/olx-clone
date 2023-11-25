import React, { useContext, useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { firebaseContext } from '../store/firebaseContext';

const Wishlist = () => {
    const user = useContext(firebaseContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = async () => {
        try {
            user?.wishlist?.map(async (docId) => {
                const docRef = doc(db, "products", docId);
                const document = await getDoc(docRef);
                setProducts((prev) => [...new Set([...prev, document.data()])]);
            })
        } catch (err) {
            console.log("firebase error : " + err);
        }
    }
    const handleDelteItem = async (productId) => {
        const docRef = doc(db, "users", user.userId);
        const prevDoc = await getDoc(docRef);
        const prevList = prevDoc.data().wishlist || [];
        const temp = prevList.filter((id) => id !== productId);
        await updateDoc(docRef, { wishlist: [...temp] });
        setProducts((prev) => {
            return prev.filter((id) => id !== productId);
        });
    }
    return (
        <div className='wishlist-container pt-8 px-10'>
            {products?.map((doc) => {
                return (
                    <div key={doc.id} className='product-container w-full rounded shadow-xl p-4 flex items-center justify-between'>
                        <div className='product-detail flex items-center justify-start gap-4'>
                            <img src={doc.imageUrl} alt="" className='h-28' />
                            <div className="flex flex-col gap-1 items-start justify-between">
                                <h4 className='text-xl font-normal'>{doc.title}</h4>
                                <p className='text-xs font-normal'>{doc.description}</p>
                                <p className='text-xs font-normal'>Created : {doc.createdAt}</p>
                                <h4 className='text-xl'>₹ {doc.price}</h4>
                            </div>
                        </div>
                        <button><img src="/icons/trash.png" onClick={() => { handleDelteItem(doc.id) }} alt="" className='w-8' /></button>
                    </div>
                )
            })}
        </div>
    )
}

export default Wishlist;