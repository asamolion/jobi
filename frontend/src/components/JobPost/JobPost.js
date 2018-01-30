import React from 'react';
import FontAwesome from 'react-fontawesome';

class JobPost extends React.Component {
    render() {
        return (
            <div className={'job-post ' + this.props.bookmarked}>
                <div className='job-heading'>
                    <div>
                        <span className='heading'>{this.props.company}</span>
                        <span className='heading bold'>{this.props.location}</span>
                        <FontAwesome name='heart-o' />
                    </div>
                    <div className='time-posted hidden-xs hidden-sm'>
                        <span>posted at 18:30</span>
                    </div>
                </div>

                <div className='job-description'>
                    <p>{this.props.description}</p>
                    <p className='hidden-md hidden-lg small'>posted at 18:30</p>
                </div>
            </div>
        );
    }
}

export default JobPost;
