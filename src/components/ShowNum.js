import React,{Component} from 'react';
import store from '../redux/store';

export default class ShowNum extends Component{
	state = {
		num : store.getState().numReducerState.num
	}
	componentDidMount(){
		store.subscribe(()=>{
			this.setState({
				num:store.getState().numReducerState.num
			})
		})
	}

	render(){
		return <div className="showNum">
			<span>{this.state.num}</span>
		</div>
	}
}