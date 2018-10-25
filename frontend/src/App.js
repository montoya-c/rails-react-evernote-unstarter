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
    if (localStorage.token !== "undefined"){
      fetch('http://localhost:3000/profile',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
      })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ userData: resp, isLoggedIn: true })
      })
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  setUser = (user) => {
      this.setState({
        userData: user,
        isLoggedIn: true
      })
  }

  render() {
    console.log(this.state.userData)
    return (
      <div className="App">
       <Header isLoggedIn ={this.state.isLoggedIn} userData={this.state.userData} setUser={this.setUser}/>
       {this.state.userData ? (<JournalContainer userData={this.state.userData}/>) : null }
      </div>
    );
  }
}

export default App;
