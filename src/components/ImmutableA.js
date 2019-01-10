import React,{ Component } from 'react';
import shouldComponetUpdate from '../common/shoulComponentUpdate';

export default class ImmutableA extends Component{
	constructor(props){
		super(props);
		this.shouldComponetUpdate = shouldComponetUpdate.bind(this);
	}
	render(){
		console.log('ImmutableA render')
		return <div>
			ImmutableA
			<div>props:{this.props.name}</div>
		</div>
	}
}