import React from "react";
import { useNavigate } from "react-router-dom"

const SellHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="sell-header-container bg-slate-200 w-full h-16 flex items-center justify-start px-8">
            <img src="../../public/icons/arrow.png" alt="" className="w-6 cursor-pointer"
            onClick={() => {
                navigate(-1);
            }} />
        </div>
    )
}

export default SellHeader;