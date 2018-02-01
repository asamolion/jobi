import React from 'react';

export default class JobDetail extends React.Component {
    render() {
        return (
            <div className='content job-detail container'>
                <h1>
                    <span className='border-right'>Google</span>
                    <span className='border-right'>Business Strategy</span>
                    <span>Berlin</span>
                </h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet vulputate tellus. Proin aliquam sollicitudin consectetur. Sed et risus elit. Fusce tempus id sapien et tristique. Cras a facilisis risus. Pellentesque tincidunt posuere posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ut orci ac odio sollicitudin molestie. Vestibulum eget nunc sodales, blandit nulla eu, malesuada augue. Suspendisse id massa elit. Phasellus vel pharetra orci. Praesent ac pellentesque ligula, gravida volutpat nulla. Integer rhoncus ex nisl, consectetur sagittis lectus lobortis sed. Etiam auctor mi non viverra rhoncus. Duis suscipit justo vitae consequat fringilla.

                    Integer mollis in nulla id congue. Duis vitae leo odio. Suspendisse non vulputate tellus. Nullam a sapien tortor. Vestibulum id leo a est tincidunt ullamcorper at quis ex. Curabitur at purus risus. Integer facilisis id ipsum malesuada maximus. Proin dapibus, erat in vehicula congue, eros nunc ornare elit, id scelerisque erat nulla egestas nulla. Proin porttitor vel diam a tincidunt. Maecenas ac dui a sapien facilisis lobortis. Morbi vitae dignissim mi, non congue augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id porttitor est, vel viverra leo. Aenean lacinia odio eu orci tincidunt, vel volutpat magna imperdiet.</p>


                <div className='btn-container'>
                    <button type='submit' className='btn btn-primary'>Apply</button>
                </div>
            </div>
        );
    }
}
