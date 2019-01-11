import React,{ Component } from 'react';
import shouldComponentUpdate from './common/shouldComponentUpdate';
//import { shouldComponentUpdate } from 'react-immutable-render-mixin';
import ImmutableA from './components/ImmutableA';
import ImmutableB from './components/ImmutableB';
console.log(shouldComponentUpdate)
export default class ImmutableTest extends Component{
	constructor(props) {
	    super(props);
	    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
	}

	state={
		nameA:"ImmutableA",
		nameB:{
			name:"ImmutableB"
		}
	}
	
	changeState = ()=>{
		this.setState({
			nameA:"ImmutableA",
			nameB:{
				name:"ImmutableR"
			}
		})
	}
	render(){
		console.log('ImmutableTest render');
		return <div>
			<ImmutableA name={this.state.nameA} />
			<ImmutableB name={this.state.nameB.name} />
			<input onClick={this.changeState} type="button" value="修改数据"/>
		</div>
	}
}