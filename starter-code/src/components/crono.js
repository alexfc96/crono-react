import React, { Component } from "react";
import '../App.css'

class Crono extends Component {

  state = {
    timer : 0,
    seconds : 0,
    minutes : 0,
    hours : 0,
  }

  changeSeconds(){
    const {hours, minutes, seconds} = this.state;
    if(minutes===59 && seconds===59){
      this.setState({
        seconds : 0,
        minutes: 0,
        hours: hours+1,
      })
    } else if(seconds===59){
      this.setState({
        seconds : 0,
        minutes: minutes+1,
      })
    } else{
      this.setState({
      seconds : this.state.seconds+1,
    })
    }
  }

  componentDidMount = () => {
    this.timer = setInterval(()=>{   //Recuerdo que Thor guardaba esta función(el nombre) en el constructor. Porque?
      this.changeSeconds()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  start = () => {
    this.timer = setInterval(()=>{
      this.changeSeconds()
    }, 1000);
  }

  stop = () => {
    clearInterval(this.timer); 
  }

  reset = () => {
    this.stop()
    this.setState({
      seconds : 0,
      minutes: 0,
      hours: 0,
    })
  }

  render(){
    const {hours, minutes, seconds} = this.state;
    console.log(seconds)  //porque lo pinta 2 veces?

    return(

      <div className="crono" >

        <h2>{hours + ":" + minutes + ":" + seconds}</h2>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>

      </div>
    )
  }

}

export default Crono
