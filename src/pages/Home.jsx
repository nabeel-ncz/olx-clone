import React, { Fragment, useEffect, useState } from "react";
import { db } from "../config/firebase";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav"
import CardsRow from "../components/CardsRow/CardsRow";
import LoadButton from "../components/LoadButton/LoadButton";
import Footer from "../components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        handleProducts();
    }, []);
    const handleProducts = async () => {
        const snapshot = await getDocs(collection(db, "products"));
        const temp = [];
        const productChunks = [];
        snapshot.forEach((doc) => {
            temp.push({ productId: doc.id, ...doc.data() });
            if (temp.length === 4) {
                productChunks.push([...temp]); 
                temp.length = 0;
            }
        });
        if (temp.length > 0) {
            productChunks.push([...temp]);
        }
        setProducts(productChunks);
    }

    return (
        <div className="home-container bg-slate-50 flex flex-col w-full h-screen">
            <Header />
            <Nav />
            {products?.map((items, index) => {
                return (
                    <Fragment key={index}>
                        {index === 0 ?
                            <CardsRow products={items} isSpecial={true} isHead={true} isFeatured={true} heading={"Based on your last search"} />
                            : <CardsRow products={items} isSpecial={false} isHead={true} isFeatured={false} heading={""} />
                        }
                    </Fragment>
                )
            })}
            <LoadButton />
            <Footer />
        </div>
    )
}

export default Home;