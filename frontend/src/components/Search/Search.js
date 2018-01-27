import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import JobPost from '../JobPost/JobPost.js';

class Search extends React.Component {
    render() {
        return (
            <div className='content search-container'>
                <SearchForm />

                <div className='search-results'>
                </div>
            </div>
        );
    }
}

export default Search;
