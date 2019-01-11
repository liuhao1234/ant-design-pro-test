import React,{ Component } from 'react';
import shouldComponentUpdate from '../common/shouldComponentUpdate';

export default class ImmutableA extends Component{
	constructor(props) {
	    super(props);
	    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
	}
	render(){
		console.log('ImmutableA render')
		return <div>
			ImmutableA
			<div>props:{this.props.name}</div>
		</div>
	}
}