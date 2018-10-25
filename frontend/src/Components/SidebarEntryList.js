import React, { Component } from 'react';
import EntryListItem from '../Components/EntryListItem';

export default class SidebarEntryList extends Component{

  renderJournalEntry = () => (
    this.props.journalEntries.map(journalEntry =>(
      < EntryListItem journalEntry={journalEntry} key={journalEntry.id} handleEntryClick={this.props.handleEntryClick} />
    ))
  )



render(){
  const style = {border: "1px solid red", padding: "1rem", margin: "1rem", width: '30%'}
  return(
      <div id="journal-entry-list" style={style}>
        <ul>{this.renderJournalEntry()}</ul>
        <button onClick={e => this.props.handleCreateNewClick(e)}>New Journal Entry</button>
      </div>
  )
}

}
