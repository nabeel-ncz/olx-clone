import React, { useState } from "react";

export const usePostForm = (doc) => {
    const [ state, setState ] = useState(doc);
    const handleForm = (event) => {
        setState((prev) => {
            return {
                ...prev,
                [event.target.name]:event.target.value,
            }
        })
    }
    return [state, setState, handleForm];
}