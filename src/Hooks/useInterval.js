import { useEffect, useState } from "react";
const useInterval = (allow) => {
    const [count, setcount] = useState(0);
    useEffect(() => {
        let interval;
        if (allow) {
            interval = setInterval(() => { setcount((prevCount) => { return prevCount + 1 }) }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [allow]);
    return count;
};
export default useInterval;