import React from "react";

const LoadButton = () => {
    const handleLoadButton = () => {}
    return (
        <div className="load-btn-container w-full flex items-center justify-center py-2">
            <button onClick={handleLoadButton} className="px-6 py-3 border-2 border-black rounded">Load More</button>
        </div>
    )
}

export default LoadButton;