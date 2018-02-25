import React from 'react';
import './SideBar.css';


const SideBar =()=>{
  return(
    <div>
     <div className="App-Header">
          <p className="HeaderText">The <span className="bookCap">Book</span> Shelf</p>
        </div>
        <div className="App-Sidebar" />
    </div>
  );
}

export default SideBar;

