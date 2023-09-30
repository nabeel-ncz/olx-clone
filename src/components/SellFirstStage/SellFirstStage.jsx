import "./SellFirstStage.css"
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import SellHeader from "../SellHeader/SellHeader";

const SellFirstStage = () => {
    const [allCategories, setAllCategories] = useState(null);
    const [categoryTitle, setCategoryTitle] = useState(null);
    const [categorySub, setCategorySub] = useState(null);
    const [curr, setCurr] = useState('');
    const [selected, setSelcted] = useState('');

    useEffect(() => {
        const temp = handleFetchCategories();
        temp.then((result) => {
            setAllCategories({ ...result });
            setCategoryTitle([...Object.keys(result)])
        });
    }, []);

    const handleFetchCategories = async () => {
        const docRef = doc(db, "categories", "TwdbiXbLb2myC5qkqUkz");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    };

    const handleCategory = (key) => {
        setCategorySub([...allCategories[key]]);
        setCurr(key);
    }
    const handleNext = () => {
        console.log(selected);
        console.log(curr);
    }

    return (
        <>
            <SellHeader />
            <div className="first-stage-container w-full h-screen px-12 pt-2">
                <div className="row border-2 h-3/4 rounded flex items-center justify-between">
                    <div className="col w-1/2 h-full flex flex-col items-start border-r-2">
                        {categoryTitle?.map((title, index) => {
                            return (
                                <div key={index} className="categ-item" onClick={() => {
                                    handleCategory(title);
                                }}>
                                    <h4>{title}</h4>
                                    <img src="../../../public/icons/left.png" alt="" className="w-8 rotate-180" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col w-1/2 h-full flex flex-col items-start">
                        {categorySub?.map((title, index) => {
                            return (
                                <div key={index} className="item-sub" onClick={() => {
                                    setSelcted(title);
                                }}>
                                    {title}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row py-6 w-full text-end">
                    <Link to={{
                        pathname: '/sell/post',
                        search: `?category=${curr}&title=${selected}`
                    }} >
                        <button className="text-center px-6 py-2 text-base font-normal bg-slate-800 hover:bg-slate-900 text-white rounded" onClick={handleNext}>Next</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SellFirstStage;