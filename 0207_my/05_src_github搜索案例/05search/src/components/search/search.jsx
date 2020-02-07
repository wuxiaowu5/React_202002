import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

	search = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.keyWord
		//2.发送请求之前，展示loading状态
		PubSub.publish('atguigu',{isFirst:false,isLoading:true});
		//3.发送请求
		axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
			(response)=>{
				//更新状态
				PubSub.publish('atguigu',{
					isLoading:false,
					users:response.data.items
				});
			},
			(err)=>{
				//更新状态
				PubSub.publish('atguigu',{
					isLoading:false,
					error:err.message
				});
			}
		)
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="enter the name you search" ref="keyWord"/>&nbsp;
				<button onClick={this.search}>Search</button>
			</div>
		)
	}
}
