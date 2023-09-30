import React from "react";
import Card from "../Card/Card";


const CardsRow = ({ products, isSpecial, heading, isHead, isFeatured }) => {
    return (
        <div className="cards-row px-28">
            <div className={`row-container ${isSpecial && "bg-slate-200"} py-6 flex flex-col items-center justify-center gap-2`}>
                {isHead &&
                    <div className="row-head px-7 w-full flex items-center justify-between">
                        <h4 className="text-2xl font-normal">{heading}</h4>
                        <span className="text-sm underline cursor-pointer">View more</span>
                    </div>
                }
                <div className="row-content flex flex-row items-center justify-center gap-4 mb-2">
                    {products?.map((doc, index) => {
                        return (
                            <Card key={index} isFeatured={isFeatured} imageUrl={doc.imageUrl} title={doc.title} price={doc.price} createdAt={doc.createdAt} productId={doc.productId} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardsRow;