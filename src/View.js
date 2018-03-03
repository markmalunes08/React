import React, { Component } from 'react';
import axios from 'axios';
import {action,DisplayData} from './Action';


class View extends Component {
  constructor() {
    super();
     this.Generate = this.Generate.bind(this);
     this.CheckboxNum = this.CheckboxNum.bind(this);
     this.CheckboxSym = this.CheckboxSym.bind(this);
     this.CheckboxLow = this.CheckboxLow.bind(this);
     this.CheckboxUp = this.CheckboxUp.bind(this);
     this.CheckboxAmbi = this.CheckboxAmbi.bind(this);
     this.CheckboxSimi = this.CheckboxSimi.bind(this);
     //initial state
     this.state = 
     {
      PasswordState : ' ',
      CheckSym : false,
      CheckNum : false,
      CheckLow : false,
      CheckUp : false,
      ExAmbi : false,
      ExSimi : false
     }
    //  componentDidMount() 
    //  {
    //   console.log('componentDidMount!');
    //   this.setState({loading: true });
    //   axios.get('./../public/Library.json')
    //   .then((response) => {
    //     console.log('response: ', response.data);
    //     this.setState({
    //       loading: false,
    //       posts: response.data
    //     });
    //   });}
    //   render()
    //    {
    //     console.log('render!');
    //     let rows = [];
    //     // a key attrib is required for every item on a list, should be provided when populating list, on direct child of list
    //     this.state.posts.forEach((post) => {
    //       rows.push( );
    //     });
    //   }
    
     

    //  }  
    // //this.GetLength = this.GetLength.bind(this);
  }
  
  

  additems()
  {
    var items = [];
    for(var i = 16;i<33;i++)
    {
      items.push(<option key={i} id={i}>{i}</option>)
    }
    
    return items;
  }

  CheckboxSym(e)
  {
          
    this.setState({CheckSym: e.target.checked})
  }

  CheckboxNum(e)
  {
    this.setState({CheckNum: e.target.checked})
  }

  CheckboxLow(e)
  {
      this.setState({CheckLow: e.target.checked})
      // console.log("this.state.CheckLow");
      // console.log(this.state.CheckLow);
      // console.log("this.state.CheckLow");
  }

  CheckboxUp(e)
  {
  this.setState({CheckUp: e.target.checked})
  }

  CheckboxAmbi(e)
  {
    this.setState({ExAmbi: e.target.checked})
  }

  CheckboxSimi(e)
  {
    this.setState({ExSimi:e.target.checked})
  }

  Submit()
  {
    console.log(this.state.CheckSym);
    console.log(this.state.CheckNum);
    console.log(this.state.CheckLow);
    console.log(this.state.CheckUp);
    console.log(this.state.ExAmbi);
    console.log(this.state.ExSimi);
  }
  
  Generate()
  {
    
    console.log(this.state.CheckSym);
    console.log(this.state.CheckNum);
    console.log(this.state.CheckLow);
    console.log(this.state.CheckUp);
    console.log(this.state.ExAmbi);
    console.log(this.state.ExSimi);
    console.log('Click happened'); 
    //console.log(this.ref.numbers.checked)
    console.log(this.refs.password.value);
    console.log(this.refs.combo.value);
                var examb ="!@#$%^&*_+=*.";
                var exsym ="!@#$%^&*()_+=[]{}':;*/.\"<>~`";
                var exnum ="23456789";
                var exsmall="abcdefghjkmnpqrstuvwxyz"
                var exbig ="ABCDEFGHJKLMNPQRSTUVWXYZ";
                var bigLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var smallLetters ="abcdefghijklmnopqrstuvwxyz";
                var numberCharacters="1234567890";
                var symbolCharacters="!@#$%^&*()_+=[]{}|':;*/.\"<>~`";
                var similarCharacters = "il1Lo0O|";
                var ambigouosCharacters = "{}[]<>;:./\\,~`\"'";
                var possible ="";
                var password ="";
                var checkedpassword ="";
                //length value
                var lengthval=this.refs.combo.value;
                //checkbox values
                var symbolscheckbox =this.state.CheckSym;
                var numberscheckbox =this.state.CheckNum;
                var upcasecheckbox =this.state.CheckUp;
                var lowcasecheckbox =this.state.CheckLow;
                var ambicheckbox =this.state.ExAmbi;
                var simicheckbox = this.state.ExSimi;
                if(upcasecheckbox===true)
                       {
                        if(simicheckbox===true)
                        {
                            possible+=exbig;
                        }
                        else
                        {
                        possible += bigLetters;
                        }
                       }
                       if(lowcasecheckbox===true)
                       {
                        if(simicheckbox===true)
                        {
                            possible+=exsmall;
                        }
                        else
                        {
                        possible += smallLetters;
                        }
                       }
                       if(symbolscheckbox===true)
                       {
                        if(simicheckbox===true)
                        {
                            possible+=exsym;
                        }
                        else
                        {
                        possible += symbolCharacters;
                        }
                       }
                       if(numberscheckbox===true)
                       {
                        if(simicheckbox===true)
                        {
                            possible+=exnum;
                        }
                        else
                        {
                        possible += numberCharacters;
                        }
                       }

                       console.log(possible);
                       // GENERATING PASSWORD
                       for(let i=0;i<lengthval;i++)
                       {
                                   password += possible.charAt(Math.floor(Math.random()*possible.length)+1); 
                                 
                       }
                       // Checking password 
                       for(let i=0;i<lengthval;i++)
                       {
                       var temporarypassword="";   
                       if(RegExp(/[[<>{}()/\\'\["`~,;:.\]]/gi).test(password.charAt(i))&&ambicheckbox.checked)
                       {    
                       do
                       {
                         temporarypassword= password.replace(password.charAt(i),possible.charAt(Math.floor(Math.random()*possible.length)+1));
                       }while(RegExp(/[<>{}()/]\\[\'"`~,;:.]/gi).test(temporarypassword==false))
                               checkedpassword+=temporarypassword.charAt(i);
                               temporarypassword="";
                              
                       }

                       else 
                       {
                              checkedpassword += password.charAt(i);
                       }
                       }
                       
                       this.refs.password.value = checkedpassword;
                       var obj; 
                       action().then(lett => 
                        {
                          this.refs.rememberpassword.value=DisplayData(lengthval,checkedpassword,lett)
                         
                        });
                       console.log("pasa", obj);
                       
                        

                       
                       ////////////////
                        // var myObj, myJSON, text, obj;
                        // //Storing data:
                        // myObj = { "A":"APPLE", "B":"BEER", "C":"CRAB","D":"DEER", "E":"EAGLE", "F":"FOX", "G":"GECKO", "H":"HORSE" ,"I":"INSECT", "J":"JAGUAR", "K":"KOALA", "L":"LION", "M":"MONKEY", "N":"NEWT", "O":"OCTOPUS", "P":"PENGUIN", "Q":"QUAIL", "R":"RABBIT", "S":"SEAL", "T":"TIGER", "U":"UGUISU", "V":"VAMPIREBAT", "W":"WHALE", "X":"X-RAYTETRA", "Y":"YAK", "Z":"ZEBRA",  "a":"apple", "b":"beer", "c":"crab","d":"deer", "e":"eagle", 
                        // "f":"fox", "g":"gecko", "h":"horse" ,"i":"insect", "j":"jaguar", "k":"koala", "l":"lion", "m":"monkey", "n":"newt", "o":"octopus", "p":"penguin", "q":"quail", "r":"rabbit", "s":"seal", "t":"tiger", "u":"uguisu", "v":"vampirebat", "w":"whale", "x":"x-raytetra", "y":"yak", "z":"zebra"};
                        
                        // myJSON = JSON.stringify(myObj);
                        // localStorage.setItem("Library", myJSON);
        
                        // //Retrieving data:
                        // text = localStorage.getItem("Library");
                        // obj = JSON.parse(text);
                        
                        
                        console.log("action called")
                        
                        




    const qwe=""; 
    var x="";
    //const lengthval = this.refs.combo.value;
    //generate password
    for(let i=0;i<lengthval;i++)
    {
      x += bigLetters.charAt(Math.floor(Math.random()*bigLetters.length)+1)
    }
    console.log(x);
    const display=x;
    
    this.setState({PasswordState:display});
  }

  render() {
    return (
      <div>          
          <h1 className="App-title">Welcome to React</h1>        
        Password Length : <select ref="combo">{this.additems()}</select>
        <br/>  
        Include Symbols : <input type="checkbox" name="symbols" ref="symbols"  onClick={this.CheckboxSym}></input>
        <br/>  
        Include Numbers : <input type="checkbox" name="numbers" ref="numbers" onClick={this.CheckboxNum}></input>
        <br/>    
        Include Lowercase Characters: <input type="checkbox" name="LowCase" ref="LowCase" onClick={this.CheckboxLow}></input>
        <br/>        
        Include Uppercase Characters: <input type="checkbox" name="UpCase" ref="UpCase" onClick={this.CheckboxUp}></input>
        <br/>    
        Exclude Ambiguous Characters: <input type="checkbox" name="AmbiChar" ref="AmbiChar" onClick={this.CheckboxAmbi}></input>
        <br/>    
        Exclude Similar Characters: <input type="checkbox" name="SimiChar" ref="SimiChar" onClick={this.CheckboxSimi}></input>
        <br/>
        <button onClick={this.Generate}>Generate Password</button>
        <br/>
        Your New Password: <input type="text" ref="password" name="password"></input>
        <br/>
        Remember Your Password: <input type="text" ref="rememberpassword" name="rememberpassword"></input>
        <h1 >{this.state.PasswordState}</h1>
        
      </div>
    );
  }
}

export default View;
