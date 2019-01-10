import React,{ Component } from 'react';
import RenderAuthorized from 'ant-design-pro/lib/Authorized';
import {
	Alert
} from 'antd';

const Authorized =RenderAuthorized('user');

export default class AuthorizedTest extends Component{
	render(){
		return <div>
			<Authorized authority={["user"]}>
			    <Alert message="user Passed!" type="success" showIcon />
			</Authorized>
		</div>
	}
}