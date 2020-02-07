import React,{Component} from 'react'
import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component{

	state = {
		comments:[]
	}

	//此方法用于添加一个评论，需要接收一个评论对象
	addComment = (commentObj)=>{
		//1.获取原状态
		let {comments} = this.state
		comments.unshift(commentObj)
		this.setState({comments})
	}

	//此方法用于删除一个评论，需要接收一个评论的id
	deleteComment = (id)=>{
		let {comments} = this.state
		comments = comments.filter((commentObj)=>{
			return commentObj.id !== id
		})
		this.setState({comments})
	}

	render(){
		const {comments} = this.state
		return(
			<div id="app">
				<div>
					<header className="site-header jumbotron">
						<div className="container">
							<div className="row">
								<div className="col-xs-12">
									<h1>请发表对React的评论</h1>
								</div>
							</div>
						</div>
					</header>
					<div className="container">
						<Add addComment={this.addComment}/>
						<List comments={comments} deleteComment={this.deleteComment}/>
					</div>
				</div>
			</div>
		)
	}
}