import React from 'react';
import MaskedInput from 'react-text-mask';
import Checkbox from 'rc-checkbox';
import emailMask from 'text-mask-addons/dist/emailMask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import Footer from '../Footer/Footer.js';

let numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false
})
export default class Signup extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='content signup'>
                    <h2>Please sign up</h2>
                    <form id='signup-form' className='' method='POST' action=''>
                        <div className='row'>
                            <div className='col-sm-3 col-sm-offset-3'>
                                <MaskedInput
                                    mask={false}
                                    className='form-control input-field'
                                    placeholder='First Name'
                                    id='first-name'
                                    name='firstName'
                                />
                            </div>
                            <div className='col-sm-3'>
                                <MaskedInput
                                    mask={false}
                                    className='form-control input-field'
                                    placeholder='Last Name'
                                    id='last-name'
                                    name='lastName'
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 col-sm-offset-3'>
                                <MaskedInput
                                    mask={emailMask}
                                    className='form-control input-field'
                                    placeholder='Email'
                                    id='email'
                                    name='email'
                                />
                            </div>
                            <div className='col-sm-3'>
                                <MaskedInput
                                    mask={numberMask}
                                    className='form-control input-field'
                                    placeholder='Phone Number'
                                    id='phoneno'
                                    name='phoneno'
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 col-sm-offset-3'>
                                <MaskedInput
                                    mask={false}
                                    className='form-control input-field'
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                />
                            </div>
                            <div className='col-sm-3'>
                                <MaskedInput
                                    mask={false}
                                    className='form-control input-field'
                                    placeholder='Confirm Password'
                                    id='password2'
                                    name='password2'
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='checkbox-container col-sm-5 col-sm-offset-4'>
                                <Checkbox className='checkbox' name='tnc' />
                                <label className='checkbox-label'>I agree with the terms &amp; conditions and privacy policy</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='btn-container'>
                                <button type='submit' className='btn btn-primary'>Create Account</button>
                            </div>
                            <p className='center-align'>Already have an account? Sign in</p>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
