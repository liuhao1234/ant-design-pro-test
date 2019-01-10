import React,{ Component } from 'react';
import "./assets/style/style.styl";
import AddNum from './components/AddNum';
import ShowNum from './components/ShowNum';

export default class ReduxTest extends Component{
	render(){
		return <div className="reduxWrap">
			<AddNum />
			<ShowNum />
		</div>
	}
}