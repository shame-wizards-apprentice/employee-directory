import React from "react";
import "./style.css"

function Header() {
    return (

        <div className="jumbotron">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">For Napping Panda Missionaries, Inc</p>
            <hr className="my-4" />
            <p>Use the buttons below to search employees by name and office location, or filter alphabetically by last name and location.</p>

        </div>
    )


}

export default Header