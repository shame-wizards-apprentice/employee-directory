import React from "react";
import "./style.css";

function ResultList(props) {
    return (
        <div className="card">
            <div className="card-body">
                <ul>
                    <li>First Name: {props.first}</li>
                    <li>Last Name: {props.last}</li>
                    <li>Email: {props.email}</li>
                    <li>Office: {props.office}</li>
                </ul>
            </div>
        </div>
    )
}

export default ResultList;