import React, { useState } from "react";
import "./Modal.css";
import { Outlet } from "react-router-dom";

const Modal = () => {
    return (
        <div className="modal-container modal-container-tcss transition duration-1000 ease-in-out">
            <Outlet />
        </div>
    )
}

export default Modal;
