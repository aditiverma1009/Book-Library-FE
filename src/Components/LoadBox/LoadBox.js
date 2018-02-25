import React from 'react';
import './LoadBox.css';
import Prototype from 'prop-types';
const LoadBox =(props)=>{
  return(
    <div className="LoadBox">
        <p className="textLoadBox">Oops! No books found!</p>
        <p className="textLoadBox">Import them now ?</p>
        <button className="btnLoadBox" onClick={() => props.loadBooksIntoDb()}>SYNC</button>
    </div>
  );
}

export default LoadBox;


LoadBox.prototype = {
  loadBooksIntoDb:Prototype.func.isRequired,
};