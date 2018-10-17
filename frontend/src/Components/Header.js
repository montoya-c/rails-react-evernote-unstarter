import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';

export default class Header extends Component {
    state = {
      username: "",
      password: "",
      currentUser:{}
    };
    componentDidMount(){
      //is user logged in?
      const token = localStorage.token
      fetch('http://localhost:3000/profile',{
        method: 'GET',
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp=> resp.json())
      .then(data =>{
        if (!data.error){
          this.setState({
            currentUser: data
          });
        }
      });
    }


    handleChange = e =>{
      let name = e.target.name
      let value =e .target.value
      this.setState({
        [name]: value
      });
    };

    login = e =>{
      // e.preventDefault()

      // console.log(this.state)

      fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password
          }

        }),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
        // if (!data.error){
        //   localStorage.token = data.token;
        //   this.setState({
        //     currentUser: data.user
        //   })
        // } else{
        //   this.setState({
        //     loginError: data.error
        //   })



  }


render(){
  return(
    <div>
    <header className="App-header">
      {this.state.currentUser.id ? (<h1>Hello{this.state.currentUser.username}</h1>) : null }
    <LoginForm isLoggedIn = {this.props.isLoggedIn} handleChange={this.handleChange} login={this.login}/>
    </header>
    </div>
  )
}






}
