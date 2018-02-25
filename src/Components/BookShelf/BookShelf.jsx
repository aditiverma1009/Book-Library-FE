import PropTypes from 'prop-types';
import React from 'react';
import './BookShelf.css';
import BookPane from '../BookPane/BookPane';

const BookShelf =(props)=>{
const bookData=props.bookData;

   return(<div className="Book-Shelf-Outer">
   <h1 className="authorName">{props.author}</h1>
   <div className="Book-Shelf-orange">
   {
       bookData.map((step,index)=>(
           <BookPane bookid={step.bookid} 
             name={step.name} 
             author={step.author}  
             rating={step.rating}
             likes={step.likes}
             key={step.bookid}
             onOpinion={(i,l)=>props.onOpinion(i,l)}
             />
        ))
    }
    </div>
    </div>);
    }

export default BookShelf;

BookShelf.prototype = {
   bookData:PropTypes.array.isRequired,
   author:PropTypes.string.isRequired,
   onOpinion:PropTypes.func.isRequired,
};
