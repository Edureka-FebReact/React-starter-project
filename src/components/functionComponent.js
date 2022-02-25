import React from "react";

function Header(props) {

    return(
        <div>
            <h1>Welcome {props.name} </h1>
            <h2>this is a Header functional component</h2>
        </div>
    )
}

export default Header;