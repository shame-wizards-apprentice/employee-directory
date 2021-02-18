import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import ResultList from "../ResultList";
import Header from "../Header";
import API from "../../utils/API";
import "./style.css";



export default class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    // When component mounts, call the getEmployees function for 50 random employees
    componentDidMount() {
        this.getEmployees(50);
    }

    // API call to grab random employees
    getEmployees = query => {
        API.viewAll(query).then(res => {
            this.setState({ results: res.data.results })
        }).catch(err => console.log(err))
    }

    // Update state when input value changes
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // Search employees by last name
    searchByName = event => {
        event.preventDefault();
        const lastName = this.state.results.filter(result => result.name.last === this.state.search)
        this.setState({
            results: lastName
        })

    }

    // Search employees by office location (country)
    searchByOffice = event => {
        event.preventDefault();
        const office = this.state.results.filter(result => result.location.country === this.state.search)
        this.setState({
            results: office
        })
    }

    // Sort employees alphabetically by last name
    sortAtoZ = event => {
        event.preventDefault();
        this.setState({
            results: this.state.results.sort((a, b) => {
                return (a.name.last < b.name.last) ? -1 : (a.name.last > b.name.last) ? 1 : 0
            })
        });
    }

    // Sort employees alphabetically by office location (country)
    sortCountry = event => {
        event.preventDefault();
        this.setState({
            results: this.state.results.sort((a, b) => {
                return (a.location.country < b.location.country) ? -1 : (a.location.country > b.location.country) ? 1 : 0
            })
        });
    }

    // Render search form and result cards
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <container className="container">
                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        searchByName={this.searchByName}
                        searchByOffice={this.searchByOffice}
                        sortAtoZ={this.sortAtoZ}
                        sortCountry={this.sortCountry}
                    />
                    <div className="card-container">
                        {this.state.results.map(result => (
                            <ResultList
                                first={result.name.first}
                                last={result.name.last}
                                email={result.email}
                                office={result.location.country}
                            />
                        ))}
                    </div>
                </container>
            </div>
        )
    }
}

