import React from 'react';
import MaskedInput from 'react-text-mask';

export default class Login extends React.Component {
    render() {
        return (
            <div className='content login'>
                <h2>Please log in</h2>

                <form id='login-form' className='' method='POST' action=''>
                    <div className='row'>
                        <div className='col-sm-3 center-block'>
                            <MaskedInput
                                mask={false}
                                className='form-control input-field'
                                placeholder='Login'
                                id='login'
                                name='login'
                            />
                            <MaskedInput
                                mask={false}
                                className='form-control input-field'
                                placeholder='Password'
                                id='password'
                                name='password'
                            />
                            <div className='btn-container'>
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </div>
                            <p className='center-align'>Don't have an account? Sign Up!</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
