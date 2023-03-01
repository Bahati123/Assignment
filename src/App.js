import {Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      mary:'',
      users: [] 
     
    }
  }
  reasch=(e)=>{
    this.setState({
      mary:e.target.value
    })
  }
  componentDidMount(){
    console.log('Didmount');
    fetch('https://dummyjson.com/products')
    .then((response)=> response.json())
    .then(namelist=> {
      this.setState({users:namelist.products});
      
     
    });
    
  }

  render(){
    const filtereduses=this.state.users.filter(
      goods=>{return goods.title.toLowerCase().includes(this.state.mary.toLowerCase())});
      console.log(filtereduses);
      return(
        <div className='App'>
    
        <input type='text' onChange={this.reasch}/>
        {filtereduses.map((result)=>{return(
          <div>
            <h1 key={result.id}>{result.title}</h1>
          </div>
        )})}
        </div>
      )
  }}
export default App;
