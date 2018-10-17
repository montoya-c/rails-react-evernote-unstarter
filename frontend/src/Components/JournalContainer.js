import React, {Component} from 'react';
import SearchBar from '../Components/SearchBar';
import EntryDisplay from '../Components/EntryDisplay';
import EntryForm from '../Components/EntryForm';
import SidebarEntryList from '../Components/SidebarEntryList';

export default class JournalContainer extends Component{
  // constructor(){
  //   super()
  //   this.state = {
  //
  //   }
  // }


  render(){
    return(
      <div>
      <SearchBar />
      <EntryDisplay />
      <EntryForm />
      <SidebarEntryList/>
      </div>
    )
  }

}
