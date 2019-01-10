import React,{Component} from 'react';
import store from '../redux/store';
import { add_num,down_num } from '../redux/action/numActions';

export default class AddNum extends Component{
	componentWillMount(){
		console.log(store.getState())
	}

	addNum = ()=>{
		store.dispatch(add_num(5))
	}

	downNum = ()=>{
		store.dispatch(down_num(10))
	}

	render(){
		return <div className="addNum">
			<span>addNum</span>
			<input onClick={this.addNum} type="button" value="addNum"/>
			<input onClick={this.downNum} type="button" value="downNum"/>
		</div>
	}
}