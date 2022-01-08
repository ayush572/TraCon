import React from "react";
import Planlist from "./planlist";
function Detail(props)
{
    return (
        <div className="title">
            <h1>Plan Level</h1> {props.level}
        </div>
    )
}

export default Planlist;
