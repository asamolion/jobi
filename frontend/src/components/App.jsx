import React from 'react';
import SearchForm from './SearchForm/SearchForm.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="col-lg-12 text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="home-content">
                            <SearchForm id="job_search_form" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}