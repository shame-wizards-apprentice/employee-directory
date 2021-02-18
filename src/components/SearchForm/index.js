import React from "react";


function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Employees"
                    id="search"
                />
                <button onClick={props.searchByName} className="btn btn-info text-dark mt-3">
                    Search by Last Name
        </button>
                <button onClick={props.searchByOffice} className="btn btn-info text-dark mt-3">
                    Search by Office
        </button>
                <button onClick={props.sortAtoZ} className="btn btn-info text-dark mt-3">
                    Sort A-Z
        </button>
                <button onClick={props.sortCountry} className="btn btn-info text-dark mt-3">
                    Sort by Office
        </button>
            </div>
        </form>
    )
}

export default SearchForm;