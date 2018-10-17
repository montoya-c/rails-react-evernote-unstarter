import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import JournalContainer from './Components/JournalContainer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      isLoggedIn: false,
      // journal entries: [],
      // selectedJournalEntry: null
    }
  }

  // componentDidMount(){
  //   //is user logged in?
  // }
  //
  // handleChange = e =>{
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  //
  // login = e =>{
  //   e.preventDefault
  //
  //   fetch('http://localhost:3000/login')
  //   .then(resp => resp.json())
  //   .then(data =>{
  //     if (!data.error){
  //       localStorage.token = data.token;
  //     }
  //   })
  // }



  render() {
    return (
      <div className="App">
       <Header isLoggedIn ={this.state.isLoggedIn}/>
       <JournalContainer />
      </div>
    );
  }
}

export default App;
