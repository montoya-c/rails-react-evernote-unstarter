import React, {Component} from 'react';
import SearchBar from '../Components/SearchBar';
import EntryDisplay from '../Components/EntryDisplay';
import EntryForm from '../Components/EntryForm';
import SidebarEntryList from '../Components/SidebarEntryList';

export default class JournalContainer extends Component{

  state = {
    journalEntries: this.props.userData.journal_entries || [],
    selectedJournalEntry: null
  }


  updateJournalEntries = (resp) => {
      let entryIndex = this.state.journalEntries.findIndex(journalEntry => {
        return journalEntry.id === resp.id
    })
    this.state.journalEntries.splice(entryIndex, 1, resp)
    this.setState({
      journalEntries: this.state.journalEntries,
      selectedJournalEntry: resp
    })
  }


  selectedJournalEntry = () => {
    fetch(`http://localhost:3000/profile/${this.props.journalEntry.id}`)
    .this(resp => resp.json())
    .this(journalEntry => this.setState({
      selectedJournalEntry: journalEntry
    }))
  }

  handleEntryClick = (journalEntry) => {
    console.log("clicked an entry")
    this.setState({
      selectedJournalEntry: journalEntry
    })
  }


  handleCreateNewClick = (e) => {
    console.log("si funciona eso")
  }


  render(){
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem"}
    return(
      <div className="JournalContainer" style={style} >
        <h2>Journaling Page</h2>
        <SearchBar />
        {this.state.selectedJournalEntry ? <EntryDisplay selectedJournalEntry={this.state.selectedJournalEntry} updateJournalEntries={this.updateJournalEntries}/> : ''}
        <EntryForm handleCreateNewClick={this.handleCreateNewClick}/>
        <SidebarEntryList journalEntries={this.state.journalEntries} handleEntryClick={this.handleEntryClick} handleCreateNewClick ={this.handleCreateNewClick}
          />
      </div>
    )
  }

}

// SidebarEntryList
// this.props.journalEntries = []

// Pass callback to ListItem in render
// array.map( () => <ListItem handleEntryClick={this.props.handleEntryClick} /> )

// ListItem.js
// div/ button/ image
// onClick={(event) => props.handleEntryClick(event, id, 'hello', 6)}
