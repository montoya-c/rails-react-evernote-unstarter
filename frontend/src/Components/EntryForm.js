import React, { Component } from 'react';

export default class EntryForm extends Component{
  state ={
    newEntry: false,
    newTitle: '',
    newContent: ''
  }

  handleInput = () => {

  }

  handlePost = () => {

  }

  handleCancel = () => {

  }

  render(){
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem", width: "60%"}
    return(
      <div>
        {this.state.newEntry ? <form className="EntryDisplay" style={style} onSubmit={this.handlePost}>
          <input onChange={this.handleInput} type="text" name="title" placeholder = "Title" value={this.state.newTitle}/>
          <input onChange={this.handleInput} type="text" name="content" placeholder = "Start journaling. Write reflectivley, retrospectivey, ruminatively, freely..." value={this.state.newContent}/>
          <input type= "submit" value ="Save"/>
          <button onClick={this.handleCancel}>Cancel</button>
        </form> : ''
        }
      </div>
    )
  }


}
