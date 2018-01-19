import React from 'react';
import MaskedInput from 'react-text-mask';
import JobPost from '../JobPost/JobPost.js';

class SearchForm extends React.Component {
    render() {
	return (
	    <div className='job-search-form'>
		<p>MAKING FREELANCING RELIABLE FOR FREELANCERS AND BUSINESSES.</p>
		<p>FIND YOUR WORK NOW!</p>
		<form action="" method="GET" id="job_search_form">
		    <h1>I'm an
			<MaskedInput
			    mask={false}
			    className='search-field'
			    placeholder='Art Director'
			    id='keyword'
			    name='keyword'
			/>
			<datalist id="role-datalist"></datalist>
			<br />looking for a job in
			<MaskedInput
			    mask={false}
			    className='search-field'
			    placeholder='London'
			    id='location'
			    name='location'
			/>
			<datalist id="location-datalist"></datalist>
			<br />as a
			<MaskedInput
			    mask={false}
			    className='search-field'
			    placeholder='Freelancer'
			    id='job_type'
			    name='job_type'
			/>
			<datalist id="type-datalist"></datalist>
			<br />
			<input type="submit" value="SUBMIT" className="btn btn-default" />
		    </h1>
		</form>
	    </div>
	);
    }
}

export default SearchForm;
