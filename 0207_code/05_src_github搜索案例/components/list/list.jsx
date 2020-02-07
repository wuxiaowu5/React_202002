import React, { Component } from 'react'
import Item from '../item/item'

export default class List extends Component {
	render() {
		const {users,error,isLoading,isFirst} = this.props //接收App传递过来的users
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
