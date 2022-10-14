import "./App.css";
import React, { useState } from "react";
import useInterval from "./Hooks/useInterval";
const App = () => {
    const [allow, setallow] = useState(false);
    const data = useInterval(allow);
    const allowHandler = () => {
        setallow((prevallow) => { return !prevallow });
    };
    return (
        <React.Fragment>
            <h2>{data}</h2>
            <button onClick={allowHandler}>{(allow && <span>Stop</span>) || <span>Start</span>}
            </button>
        </React.Fragment>
    );
};
export default App;