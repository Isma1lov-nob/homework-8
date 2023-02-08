import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state ={
      title: "текущее время",
      date: new Date (),
      counter : 0
    }
    
    setInterval (()=>{
      this.setState((state , props)=>({
        date : new Date(),
        counter :  state.counter + 1
      }))
    }, 1000)
  }
  render(){
    return(
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }


}

export default App