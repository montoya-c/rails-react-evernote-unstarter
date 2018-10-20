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
      userData: null
      // journal_entries: [],
      // selectedJournalEntry: null
    }
  }

  getUserData = () =>{
    if (localStorage.token){
      fetch('http://localhost:3000/profile',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
      })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ userData: resp })
      })
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    return (
      <div className="App">
       <Header isLoggedIn ={this.state.isLoggedIn} />
       {this.state.userData ? (<JournalContainer userData={this.state.userData}/>) : null }
      </div>
    );
  }
}

export default App;
