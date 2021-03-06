import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';

export default class Header extends Component {
    state = {
      username: "",
      password: ""
    };
    componentDidMount(){
      //is user logged in?
        const token = localStorage.tokens

        if (token) {
        // if (token != undefined || token != null)
        fetch('http://localhost:3000/profile',{
          method: 'GET',
          headers:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          }
        })
        .then(resp=> resp.json())
        .then(data => {
          if (data){
            this.setState({
              currentUser: data
            });
          }
        }).catch(err => {console.log(err)})
      }
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
      .then(data => {

        if (data.jwt){
          localStorage.token = data.jwt;
          this.props.setUser(data.user)
        }})
          .catch(err => {
            console.log(err)
        })
    };




render(){
  return(
    <div>
      {this.props.isLoggedIn ?   <header className="App-header">
          {(<h1>Hello {this.props.userData.username}</h1>)  }
        </header>

        :

        <header className="App-header">
      <LoginForm  handleChange={this.handleChange} login={this.login}/>
      </header> }

    </div>
  )
}






}
