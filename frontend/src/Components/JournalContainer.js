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



  selectedJournalEntry = () => {
    fetch(`http://localhost:3000/profile/${this.props.journalEntry.id}`)
    .this(resp => resp.json())
    .this(journalEntry => this.setState({
      selectedJournalEntry: journalEntry
    }))
  }

  handleEntryClick = (e) => {
    console.log("clicked")
    this.setState({
      selectedJournalEntry: e.target.value
    })
  }

  render(){
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem"}
    return(
      <div className="JournalContainer" style={style} >
        <h2>Journaling Page</h2>
        <SearchBar />
        <EntryDisplay selectedJournalEntry={this.state.selectedJournalEntry}/>
        <EntryForm />
        <SidebarEntryList journalEntries={this.state.journalEntries} handleEntryClick={this.handleEntryClick}/>
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
