import React from 'react';


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeContent: '',
            activeClass: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='content about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <ul className='tab-list'>
                                    <div className='tab-group'>
                                        <li id='tab1' className='tab'>
                                            <span>About</span>
                                        </li>
                                        <div className='tab-content'>

                                        </div>
                                    </div>
                                    <div className='tab-group'>
                                        <li id='tab2' className='tab'>
                                            <span>Freelancer Kit</span>
                                        </li>
                                    </div>
                                    <div className='tab-group'>
                                        <li id='tab3' className='tab'>
                                            <span>Contact</span>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className='col-md-5'>
                                <div id='selected'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='tab1-content' className='hidden'>

                </div>
                <div id='tab2-content' className='hidden'>

                </div>
                <div id='tab3-content' className='hidden'>

                </div>
            </React.Fragment>
        );
    }
}
