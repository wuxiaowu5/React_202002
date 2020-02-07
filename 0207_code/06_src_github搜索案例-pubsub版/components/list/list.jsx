import React, { Component } from 'react'
import Item from '../item/item'
import PubSub from 'pubsub-js'

export default class List extends Component {
	state = {
		isFirst:true,//标识是否第一次打开
		isLoading:false,//标识是否加载中
		error:'',//错误信息
		users:[]//所有用户信息
	}

	componentDidMount(){
		//1.开启定时器 2.发送网络请求 3.订阅消息
		PubSub.subscribe('atguigu', (msg,data)=>{
			this.setState(data)
		});
	}

	render() {
		const {users,error,isLoading,isFirst} = this.state
		if(isFirst){
			return <h2>输入关键词，点击搜索</h2>
		}else if(isLoading){
			return <h2>Loading....</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
			return (
				<div className="row">
					{
						users.map((personObj)=>{
							return <Item key={personObj.login} {...personObj}/>
						})
					}
				</div>
			)
		}
	}
}
