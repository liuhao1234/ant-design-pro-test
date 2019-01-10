import React,{ Component } from 'react';
import echarts from 'echarts';

export default class EchartsComponent extends Component{
	componentDidMount(){
		const myChart = echarts.init(document.getElementById(this.props.id));
        console.log(this.props.data)
        // 绘制图表
        const options = {
            title: { 
            	text: this.props.data.title 
            },
            tooltip:{},
            xAxis: {
                data: this.props.data.xAxis
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.props.data.series
            }]
        }
        myChart.setOption(options);
        window.onresize = function(){
        	myChart.resize();
        }
	}
	render(){
		return <div id={this.props.id} style={{width:this.props.width,height:this.props.height}}></div>
	}
}































































