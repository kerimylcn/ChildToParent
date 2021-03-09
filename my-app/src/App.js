import React from "react" ;

class App extends React.Component{
  

  handleInput(x){
       console.log(x)
  }

render(){
  return(
    <div>
      <h1>Passing props from Child to Parent Component</h1>
      <Child getInput={this.handleInput} />
      
      </div>
  );
}
}

class Child extends React.Component{
  state = {term:'' };
  
  OnFormSubmit = event =>{

    event.preventDefault();
    this.props.getInput(this.state.term)
  }

  render(){
    return(
      <div>
      <form onSubmit={this.OnFormSubmit}>
      <input type="text" placeholder="please input a name..." onChange={e=> this.setState({term :e.target.value})} />
      </form>
      
        </div>

    )
  }
}


export default App;
