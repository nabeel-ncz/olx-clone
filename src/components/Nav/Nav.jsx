import React, { useState } from "react";
import "./Nav.css"
import Categories from "../Categories/Categories";

const Nav = () => {
    const [isCategOpen, setIsCategOpen] = useState(false);
    const handleCategories = () => {
        setIsCategOpen(prev => !prev);
    }
    return (
        <>
            <div className="nav-container mb-6">
                <div className="categ-dropdown cursor-pointer" onClick={handleCategories}>
                    <span>All Categories</span>
                    <img src="icons/down-arrow.png" alt="" className={`w-6 ${isCategOpen && "rotate-180"} transition duration-500 ease-in-out`} />
                </div>
                <div className="nav-links">
                    <span className="link-item">
                        Cars
                    </span>
                    <span className="link-item">
                        Scooter
                    </span>
                    <span className="link-item">
                        Mobile Phones
                    </span>
                    <span className="link-item">
                        Laptop
                    </span>
                    <span className="link-item">
                        Cpu
                    </span>
                    <span className="link-item">
                        Cars
                    </span>
                    <span className="link-item">
                        Scooter
                    </span>
                    <span className="link-item">
                        Mobile Phones
                    </span>
                    <span className="link-item">
                        Scooter
                    </span>
                </div>
            </div>
            {
                isCategOpen && <Categories />
            }
        </>
    )
}

export default Nav;