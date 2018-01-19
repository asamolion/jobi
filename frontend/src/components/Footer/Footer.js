import React from 'react';
import MaskedInput from 'react-text-mask';
import bigLogo from './big_logo.png';

export default class Footer extends React.Component {
    componentDidMount() {
	document.getElementById('year').innerHTML = new Date().getFullYear();
    }

    render() {
	return (
	    <footer className='footer'>
		<div className='newsletter-container'>
		    <h2 className='center-align'>Your Email, Your Job Offer</h2>
		    <p className='center-align'>Get Our Top Day's Job Offers Delivered To Your Inbox</p>

		    <form id='newsletter-form' className='' method='POST' action=''>
			<div className='row'>
			    <div className='input-container'>
				<MaskedInput
				    mask={false}
				    className='form-control input-field'
				    placeholder='Name'
				    id='name'
				    name='name'
				/>
				<MaskedInput
				    mask={false}
				    className='form-control input-field'
				    placeholder='Email'
				    id='email'
				    name='email'
				/>
			    </div>
			</div>
			<div className='btn-container'>
			    <button type='submit' className='btn btn-primary'>Submit</button>
			</div>
		    </form>
		</div>
		<div className='copyright-container'>
		    <img src={bigLogo} className='footer-logo' />

		    <p className='footer-text'>&copy; <span id='year'></span> make happen GmbH / All rights reserved</p>
		    <p> <a href='javascript:void();'>Facebook</a> <a href='javascript:void();'>Tumblr</a></p>
		</div>
	    </footer>
	);
    }
}
