import React from "react";
import "./Categories.css"

const Categories = () => {
    return (
        <div className="categories-container transition duration-1000 ease-in-out flex justify-between bg-slate-50 w-screen h-screen fixed top-0 left-0 z-10 overflow-scroll pt-32 px-10">
            <div className="col">
                <div className="inner-col">
                    <h4>Properties</h4>
                    <div className="content">
                        <h4>For Sale: Houses & Apartments</h4>
                        <h4>For Rent: Houses & Apartments</h4>
                        <h4>Lands & Plots</h4>
                        <h4>For Rent: Shops & Offices</h4>
                        <h4>For Sale: Shops & Offices</h4>
                        <h4>Pg & Guest houses</h4>
                    </div>
                </div>
                <div className="inner-col">
                    <h4>Mobiles</h4>
                    <div className="content">
                        <h4>Mobile Phones</h4>
                        <h4>Accessories</h4>
                        <h4>Tablets</h4>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="inner-col">
                    <h4>Jobs</h4>
                    <div className="content">
                        <h4>Data entry & Back office</h4>
                        <h4>Sales & Marketing</h4>
                        <h4>BPO & Telecaller</h4>
                        <h4>Driver</h4>
                        <h4>Office Assistant</h4>
                        <h4>Receptionist & Front office</h4>
                        <h4>Operator & Technician</h4>
                        <h4>IT Engineer & Developer</h4>
                        <h4>Hotel & Travel Executive</h4>
                        <h4>Accountant</h4>
                    </div>
                </div>
                <div className="inner-col">
                    <h4>Bikes</h4>
                    <div className="content">
                        <h4>Motorcycles</h4>
                        <h4>Scooters</h4>
                        <h4>Spare Parts</h4>
                        <h4>Bicycles</h4>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="inner-col">
                    <h4>Electronics & Appliances</h4>
                    <div className="content">
                        <h4>TVs, Video - Audio</h4>
                        <h4>Kitchen & Other Appliances</h4>
                        <h4>Computers & Laptops</h4>
                        <h4>Cameras & Lenses</h4>
                        <h4>Games & Entertainment</h4>
                        <h4>Fridges</h4>
                    </div>
                </div>
                <div className="inner-col">
                    <h4>Furniture</h4>
                    <div className="content">
                        <h4>Sofa & Dining</h4>
                        <h4>Beds & Wardrobes</h4>
                        <h4>Home Decor & Garden</h4>
                        <h4>Kids Furniture</h4>
                        <h4>Other Household Items</h4>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="inner-col">
                    <h4>Books, Sports & Hobbies</h4>
                    <div className="content">
                        <h4>Books</h4>
                        <h4>Gym & Fitness</h4>
                        <h4>Musical Instruments</h4>
                        <h4>Sports Equipment</h4>
                        <h4>Other Hobbies</h4>
                    </div>
                </div>
                <div className="inner-col">
                    <h4>Services</h4>
                    <div className="content">
                        <h4>Education & Classes</h4>
                        <h4>Tours & Travel</h4>
                        <h4>Electronics Repair & Services</h4>
                        <h4>Health & Beauty</h4>
                        <h4>Home Renovation & Repair</h4>
                        <h4>Cleaning & Pest Control</h4>
                        <h4>Other Services</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;