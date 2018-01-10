import React from 'react';


export default class SearchInput extends React.Component {
    render() {
        return <input id={this.props.id} type="text" placeholder={this.props.placeholder} required value={this.props.value} onChange={function () { }} list={this.props.list} />
    }
}