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
  }

componentDidMount(){
  this.fetchBooks();
}

loadBooksIntoDb = () => {
  axios({
    method: 'post',
    url: '/storingBooks',
  }).then(()=>{
    this.fetchBooks();
  });
};

onOpinion=(key,likestatus)=>{
  if(likestatus===0){
  axios({
    method: 'post',
    url: ('/like/'+key),
  }).then(()=>this.fetchBooks());
  } else if(likestatus===1){
  axios({
    method: 'post',
    url: ('/unlike/'+key),
  }).then(()=>this.fetchBooks());
  }
}

fetchBooks=()=>{
  axios.get('/byAuthor').then((data)=> {
    console.log('abcdedf');
    this.setState({
      response: data.data,
    });
  });
}

render(){
  console.log("in return", this.state.response);
  console.log("happppyy");
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

