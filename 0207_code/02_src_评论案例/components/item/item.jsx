import React,{Component} from 'react'
import './items.css'

export default class Item extends Component{

	delete = (id,name)=>{
		if(window.confirm(`确定删除【${name}】的评论吗`)){
			this.props.deleteComment(id)
		}
	}

	render(){
		const {id,name,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a href="#1" onClick={()=>{this.delete(id,name)}}>删除</a>
				</div>
				<p className="user"><span >{name}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}