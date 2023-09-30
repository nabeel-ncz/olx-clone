import React from "react";
import { Outlet } from "react-router-dom";

const Sell = () => {
    return(
        <div className="sell-page-container">
            <Outlet />
        </div>
    )
}

export default Sell;