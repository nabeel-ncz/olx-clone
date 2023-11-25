import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useParams } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";

const Post = () => {
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = async () => {
        try {
            const q = query(collection(db, "products"), where("userId", "==", id));
            console.log(q)
            const snapshot = await getDocs(q);
            const productsData = snapshot.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data }
            });
            setProducts(productsData);
        } catch (err) {
            console.log("firebase error : " + err);
        }
    }
    const handleDelteItem = async (id) => {
        const temp = products.map((doc) => doc.id !== id);
        setProducts([...temp]);
        await deleteDoc(doc(db,"products",id));
    }
    return (
        <div className='mypost-container pt-8 px-10'>
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


export default Post;