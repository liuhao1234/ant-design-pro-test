//定义action.type动作的名字
export const ADD_NUM = 'ADD_NUM';
export const DOWN_NUM = 'DOWN_NUM';


//定义action对象，搭载的数据
export function add_num(num){
	return {
		type:ADD_NUM,
		payload:num||1
	}
}

export function down_num(num){
	return {
		type : DOWN_NUM,
		payload : num||1
	}
}