import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import { render } from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import {header} from "./components/header";




class App extends React.Component
{ 
constructor(props) {
    super(props);
    this.state = {fname:'',lname:'',Age:'',uname:'',pwd:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var data= {};
    data[event.target.name]=event.target.value;
    this.setState(data);
  }

  handleSubmit(event) {
    alert('form was submitted ');
    event.preventDefault();
    this._create();
  }

   _create() {
    return $.ajax({
      url: 'http://localhost:8000/find',
      type: 'POST',
      data: {
       fname: this.state.fname,
        lname: this.state.lname,
        Age: this.state.Age,
        uname: this.state.uname,
        pwd: this.state.pwd
      }

    })

    .done(function(data){console.log(data);})
  }

 
  render() {
    return (
     
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />
        </label>
        <br/>
       <label>
          Last Name:
          <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Age:
          <input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          username:
          <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          password:
          <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

class User extends React.Component
{ 
constructor(props) {
    super(props);
    this.state = {username:'',password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var data= {};
    data[event.target.name]=event.target.value;
    this.setState(data);
  }

  handleSubmit(event) {
    /*alert('Login completed ');*/
    event.preventDefault();
    this._create();
  }

   _create() {
    return $.ajax({
      url: 'http://localhost:8000/log',
      type: 'POST',
      data: {
       username: this.state.username,
        password: this.state.password,
      }

    })

    .done(function(data){console.log(data);
      if (data.status===1) 
        { alert('Login completed '); }
      else if(data.status===0){
        alert('Login Failed');
      };


    })
    

  }

 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
        </label>
        <br/>
       <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}


render(<Router>
 <div> 
 < Route exact path="/" component={App} /> 
<Route path="/login" component={User} /> 
</div> 
</Router> 
,document.getElementById("app"));

