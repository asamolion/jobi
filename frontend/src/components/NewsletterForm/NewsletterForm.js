import React from 'react';
import MaskedInput from 'react-text-mask';

export default class NewsletterForm extends React.Component {
    render() {
        return (
            <div className='newsletter-container'>
                <h2 className='center-align'>Your Email, <wbr /> Your Job Offer</h2>
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
        );
    }
}

