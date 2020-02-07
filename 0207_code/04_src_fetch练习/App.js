import React,{Component} from 'react'

export default class App extends Component{

	state = {
		isLoading:true, //是否展示加载中
		repoName:'',
		repoUrl:'',
		error:'',
		keyWord:'h' //关键词
	}

	componentDidMount(){
		const url = `https://api.githubb.com/search/repositories?q=${this.state.keyWord}&sort=stars`
		fetch(url)
		.then(
			(response) => {
				console.log('请求成功了',response)
				//response.json() 返回值是一个Promise实例
				return response.json()
			},
		)
		.then(
			(value)=>{console.log('成功的数据：',value)}
		)
		.catch(
			(error)=>{console.log('失败了：',error)}
		)
		





		/* axios.get('https://api.github.com/search/repositories',{params:{q:this.state.keyWord,sort:'stars'}}).then(
			response => {
				const {name,html_url} = response.data.items[0]
				console.log(name,html_url);
				this.setState({isLoading:false,repoName:name,repoUrl:html_url})
			},
			error => {
				this.setState({isLoading:false,error:error.message})
			}
		) */
	}

	render(){
		const {isLoading,repoName,repoUrl,error,keyWord} = this.state
		if(isLoading){
			return <h2>Loading....</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
		return <h2>github上以【{keyWord}】字母开头的仓库中，点赞量最多的是【<a href={repoUrl}>{repoName}</a>】</h2>
		}
	}
}