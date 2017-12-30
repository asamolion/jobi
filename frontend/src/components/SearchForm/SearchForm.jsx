import React from 'react';
import SearchInput from '../SearchInput/SearchInput.jsx';

export default class SearchForm extends React.Component {
    render() {
        return (
            <form action="" method="GET" id="{this.props.id}">
                <h1>I'm an 
                    <SearchInput id="keyword" placeholder="Art Director" value="" list="role-datalist" />
                    <datalist id="role-datalist"></datalist>
                    <br />looking for a job in 
                    <SearchInput id="location" placeholder="London" value="" list="location-datalist" />
                    <datalist id="location-datalist"></datalist>
                    <br />as a 
                    <SearchInput id="job_type" placeholder="Freelancer" value="" list="type-datalist" />
                    <datalist id="type-datalist"></datalist>
                    <br />
                    <input type="submit" value="SUBMIT" className="btn btn-default" />
                </h1>
            </form>
        );
    }
}