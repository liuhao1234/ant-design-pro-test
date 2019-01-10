import { ADD_NUM,DOWN_NUM } from '../action/numActions';

//定义redux管理的数据
const initialState = {
	num : 0
}


//定义redux如何管理这个数据
export default function(state=initialState,action){
	switch (action.type){
		case ADD_NUM:{
			return {
				num:state.num+action.payload
			}
		}
		case DOWN_NUM:{
			return {
				num:state.num-action.payload
			}
		}
		default:
			return state;
	}
}
