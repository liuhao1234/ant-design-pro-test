import React,{ Component } from 'react';
import shouldComponetUpdate from './common/shoulComponentUpdate';
import ImmutableA from './components/ImmutableA';
import ImmutableB from './components/ImmutableB';
export default class ImmutableTest extends Component{
	state={
		nameA:"ImmutableA",
		nameB:"ImmutableB"
	}
	constructor(props){
		super(props);
		this.shouldComponetUpdate = shouldComponetUpdate.bind(this);
	}
	changeState = ()=>{
		this.setState({
			nameA:"ImmutableA",
			nameB:"ImmutableB"
		})
	}
	render(){
		console.log('ImmutableTest render');
		return <div>
			<ImmutableA name={this.state.nameA} />
			<ImmutableB name={this.state.nameB} />
			<input onClick={this.changeState} type="button" value="修改数据"/>
		</div>
	}
}