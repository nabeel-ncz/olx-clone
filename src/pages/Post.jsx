import React, { useContext, useEffect, useState } from 'react'
import { firebaseContext } from '../store/firebaseContext';
import { collection, getDocs, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const Post = () => {
    // const [products, setProducts] = useState(null);
    // const userContext = useContext(firebaseContext);

    // useEffect(() => {
    //     handleFetch();
    // },[]);

    // const handleFetch = async () => {
    //     const query = collection(db, "products",where("userId", "==", userContext.userId));
    //     const snapshot = await getDocs(query);
    //     const temp = [];
    //     snapshot.forEach((doc) => {
    //         temp.push(doc.data());
    //     });
    //     setProducts([...temp]);
    // }
    return (
        <div className='mypost-container '>
            My post
        </div>
    )
}

 
export default Post;