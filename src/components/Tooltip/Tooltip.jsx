import React from "react";
import "./Tooltip.css"
const Tooltip = () => {
    return (
        <div className="tooltip absolute bg-slate-50 shadow-xl top-10 left-[-4.75rem] w-52 flex flex-col items-start justify-center pt-4">
            <h4>English ✔️</h4>
            <h4>Hindi</h4>
            <h4>Malayalam</h4>
        </div>
    )
} 

export default Tooltip