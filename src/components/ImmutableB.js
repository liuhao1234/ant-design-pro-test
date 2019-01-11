import React,{ Component } from 'react';
import shouldComponentUpdate from '../common/shouldComponentUpdate';

export default class ImmutableB extends Component{
	constructor(props) {
	    super(props);
	    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
	}
	render(){
		console.log('ImmutableB render');
		return <div>
			ImmutableB
			<div>props:{this.props.name}</div>
		</div>
	}
}