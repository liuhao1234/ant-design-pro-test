import { is,fromJS } from 'immutable';

export default function (nextProps, nextState){
	let propsIsChange = true;
	let stateIsChange = true;

	if(this.props){
		const $thisProps = fromJS(this.props);
	    const $nextProps = fromJS(nextProps);
		if(is($thisProps,$nextProps)){
			propsIsChange = false;
		}else{
			propsIsChange = true;
		}
	}else{
		propsIsChange = false;
	}

	if(this.state){
		const $thisState = fromJS(this.state);
	 	const $nextState = fromJS(nextState);
	 	if(is($thisState,$nextState)){
	 		stateIsChange = false;
	 	}else{
	 		stateIsChange = true;
	 	}
	}else{
		stateIsChange = true;
	}

	if(!stateIsChange&&!propsIsChange){
		return false;
	}else{
		return true;
	}
}