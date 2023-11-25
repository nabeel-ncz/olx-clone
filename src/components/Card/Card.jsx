import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
import { firebaseContext } from "../../store/firebaseContext";

const Card = ({ isFeatured, imageUrl, title, price, createdAt, productId }) => {
    const [status, setStatus] = useState(false);
    const user = useContext(firebaseContext);
    useEffect(() => {
        const isProductInWishlist = user?.wishlist?.includes(productId);
        setStatus(isProductInWishlist);
    }, [productId, user?.wishlist])
    const navigate = useNavigate();
    const handleCardNavigate = () => {
        navigate(`/product?id=${productId}`);
    }
    return (
        <div className="card-container flex flex-col items-center justify-center p-2 border-[0.01rem] border-slate-300 rounded w-max bg-slate-100" onClick={handleCardNavigate}>
            <div className="card-content">
                <div className="img-container relative">
                    <img src={imageUrl} alt="" className="lg:h-44 lg:w-[18rem] md:h-[7rem] md:w-[14rem] sm:h-[5rem] sm:w-[12rem] h=[4rem] w-[11rem]" />
                    {isFeatured &&
                        <span className="sticker bg-yellow-400 flex items-center justify-center gap-1 absolute top-2 left-0 px-2">
                            <img src="icons/thunder.png" alt="" className="w-2" />
                            <span className="font-normal text-[10px]">FEATURED</span>
                        </span>
                    }
                    <Heart productId={productId} wishStatus={status} />
                </div>
                <div className="card-description pt-4 pb-1 px-2">
                    <h4 className="text-lg">₹ {price}</h4>
                    <p className="font-normal text-sm">{title}</p>
                    <div className="w-full text-end font-light text-[10px] mt-2">
                        <span>{createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;