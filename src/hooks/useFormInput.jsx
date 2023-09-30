import { useState } from "react";

export const useFormInput = (value) => {
    const [state, setState] = useState({...value});
    const handleState = (event) => {
        setState((prev) => {
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    return [ state, handleState ]; 
}