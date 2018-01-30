import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import JobPost from '../JobPost/JobPost.js';
import NewsletterForm from '../NewsletterForm/NewsletterForm.js';

class Search extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='content search-container'>
                    <SearchForm />

                    <div className='search-results'>
                        <JobPost company='Google' location='Berlin' description='A job description or JD is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range.' />
                        <JobPost company='Google' location='San Francisco' bookmarked='bookmarked' description='A job description or JD is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports, specifications such as the qualifications or skills needed by the person in the job, and a salary range.' />
                    </div>
                </div>
                <NewsletterForm />
            </React.Fragment>
        );
    }
}

export default Search;
