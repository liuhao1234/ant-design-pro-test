import React,{ Component } from 'react';
import EchartsComponent from './common/echarts/EchartsComponent';

export default class EchartsTest extends Component{
	state={
		chartData:{
            title:'ECharts 入门示例',
            xAxis: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            series: [5, 20, 36, 10, 10, 20]
        }
	}
	render(){
		return <div>
			<EchartsComponent 
				id={"main"}
				data={this.state.chartData}
				width={'100%'}
				height={200}
			/>
		</div>
	}
}