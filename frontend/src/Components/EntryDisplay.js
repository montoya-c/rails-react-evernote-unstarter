import React, { Component } from 'react';

export default class EntryDisplay extends Component{
  state = {
    isEditing: false,
    title: this.props.selectedJournalEntry.title,
    content: this.props.selectedJournalEntry.content
  }

  handleEditClick = (e) => {
    console.log("click")
    this.setState({
      isEditing: true
    })


  }

  handleChange = (e) =>{
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSave = (e) =>{
    e.preventDefault()

    return fetch(`http://localhost:3000/journal_entries/${this.props.selectedJournalEntry.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        journal_entry: {
          title: this.state.title,
          content: this.state.content
        }
      })
    }).then(resp => resp.json())
    .then(resp => this.props.updateJournalEntries(resp))
    .then(() => this.setState({
      isEditing: false
    }))
    .catch(error => console.error('Error:', error));
  }

  handleCancel = (e) => {
    e.preventDefault()
    // discards any changes and reverts back to displaying entry

    this.setState({
      isEditing: false,
      title: this.props.selectedJournalEntry.title,
      content: this.props.selectedJournalEntry.content
    })

  }


  render(){
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem", width: "60%"}
    let journalEntry = this.props.selectedJournalEntry
    return(
      <div>
      { this.state.isEditing ?
        <form className="EntryDisplay" style={style} onSubmit={this.handleSave}>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
          <input onChange={this.handleChange} type="text" name="content" value={this.state.content}/>
          <input type= "submit" value ="Save"/>
          <button onClick={this.handleCancel}>Cancel</button>
        </form> :
      <div className="EntryDisplay" style={style}>
        <img className="entryImage" src={journalEntry ? journalEntry.image : ''}/>
        <h1 className="entryTitle">{journalEntry ? journalEntry.title : ''}</h1>
        <br></br>
        <p className="entryContent">{journalEntry ? journalEntry.content : ''}</p>
        <button onClick={e=> this.handleEditClick(e)}>{journalEntry ? "Edit" : ''}</button>
      </div>
    }
    </div>
  )}
}
