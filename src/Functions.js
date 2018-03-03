import React from 'react';

export function Checkboxvalues()
{
    var symbolscheckbox =document.getElementById('symbols');
    var numberscheckbox =document.getElementById('numbers');
    var upcasecheckbox =document.getElementById('UpCase');
    var lowcasecheckbox =document.getElementById('LowCase');
    var ambicheckbox =document.getElementById('AmbiChar');
    var simicheckbox = document.getElementById("SimiChar");
}

export default Checkboxvalues;


if(this.state.CheckLow===true)
  {
    this.setState({CheckLow : false});
    
  }
  else
  {
  this.setState({CheckLow : true});
  }

  if(this.state.CheckUp===true)
  {
    this.setState({CheckUp : false});
    
  }
  else
  {
  this.setState({CheckUp : true});
  }

  if(this.state.ExAmbi===true)
  {
    this.setState({ExAmbi : false});
    
  }
  else
  {
  this.setState({ExAmbi : true});
  }
  
  if(this.state.ExSimi===true)
  {
    this.setState({ExSimi : false});
    
  }
  else
  {
  this.setState({ExSimi : true});
  }