import React, { Component } from 'react';

export default class EntryDisplay extends Component{



  render(){
    const style = {border: "1px solid black", padding: "1rem", margin: "1rem", width: "60%"}
    return(
      <div style={style}>
        {this.props.selectedJournalEntry}

      </div>
    )
  }

}
