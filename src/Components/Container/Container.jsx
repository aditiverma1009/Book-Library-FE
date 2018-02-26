// import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Component } from 'react';
import './Container.css';
import LoadBox from '../LoadBox/LoadBox';
import BookShelf from '../BookShelf/BookShelf';
 
class Container extends Component {
  constructor() {
    super();
    this.state = {
      response: {},
    };
    this.fetchBooks();
  }

loadBooksIntoDb = () => {
  axios({
    method: 'post',
    url: '/storingBooks',
  });
  console.log("in save in db");
  this.fetchBooks();
};

onOpinion=(key,likestatus)=>{
  if(likestatus===0){
  axios({
    method: 'post',
    url: ('/like/'+key),
  });
}else if(likestatus===1){
  axios({
    method: 'post',
    url: ('/unlike/'+key),
  });
}
this.fetchBooks();
}

fetchBooks=()=>{
  axios.get('/byAuthor').then((data)=> {
    this.setState({
      response: data.data,
    });
  })
  console.log("in fetchbook");
}

render(){

  console.log("in return", this.state.response);
 return(
  Object.keys(this.state.response).length===0?
    <LoadBox loadBooksIntoDb={()=>this.loadBooksIntoDb()}/>:
    Object.keys(this.state.response).map((step)=>{
      return <BookShelf bookData={this.state.response[step]} author={step} key={step}  onOpinion={(i,l)=>this.onOpinion(i,l)}/>
    })
    );
}
}

export default Container;

