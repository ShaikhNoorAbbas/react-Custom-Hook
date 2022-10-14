import React, { useState } from "react";
const useCounter = () => {
    const [count, setcount] = useState(0);

    const plusHandler = () => {
        setcount((prevCount) => { return prevCount + 1 });
    };
    const minusHandler = () => {
        setcount((prevCount) => { return prevCount - 1 });
    };
    const resetHandler = () => {
        setcount(0);
    };
    return { count, plusHandler, minusHandler, resetHandler };
};
export default useCounter;