import React,{ Component } from 'react';
import shouldComponetUpdate from '../common/shoulComponentUpdate';

export default class ImmutableB extends Component{
	constructor(props){
		super(props);
		this.shouldComponetUpdate = shouldComponetUpdate.bind(this);
	}
	render(){
		console.log('ImmutableB render');
		return <div>
			ImmutableB
			<div>props:{this.props.name}</div>
		</div>
	}
}