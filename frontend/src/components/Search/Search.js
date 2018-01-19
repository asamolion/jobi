import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import JobPost from '../JobPost/JobPost.js';

class Search extends React.Component {
    render() {
	return (
	    <div className='content search-container'>
		<SearchForm />

		<div className='search-results'>
		    <JobPost company='Airbnb' location='NY' description='Google is looking for a creative developer in New York City'/>
		    <JobPost company='Google' location='London' bookmarked='bookmarked' description='Google is looking for a creative developer in New York City'/>
		</div>
	    </div>
	);
    }
}

export default Search;
