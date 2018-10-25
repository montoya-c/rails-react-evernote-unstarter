import React, { Component } from 'react';

const EntryListItem = (props) => {
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem", overflow: 'hidden',
    textOverflow: 'ellipsis'}
    return(
      <div style={style} onClick={e => props.handleEntryClick(props.journalEntry)}>
        <h2>{props.journalEntry.title}</h2>
        <p >{props.journalEntry.content}</p>

      </div>

    )
}
export default EntryListItem
