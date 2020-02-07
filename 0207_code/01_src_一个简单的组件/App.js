import React,{Component} from 'react'; //引入React核心库
import Person from './components/person'

class App extends Component{
	render(){
		return (
			<div>
				<h2>App</h2>
				<Person/>
			</div>
		)
	}
}

export default App;
