// import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import React from 'react';
import './BookPane.css';


const BookPane =(props)=> { 
    const likes=props.likes;
  return(
    <div className="BookPane-box col-2  col-mq-3 col-m-4">
    <div className="imgParent">
    <img className="bookCover" 
        src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51VNlzbfpXL._SX331_BO1%2C204%2C203%2C200_.jpg" 
        alt="bookCover"/>
    </div>
    <div className="bookDetails">
        
        {/* <p className="BP-bookid">{props.bookid}</p> */}
     <div className="heart" onClick={()=>props.onOpinion(props.bookid,props.likes)}>   {
        likes===1?<img className="likeheart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-heart.svg/2000px-Circle-icons-heart.svg.png"
        alt="like"/>:
        <img className="unlikeheart" src="https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Heart-512.png"
        alt="unlike"/>
        }
        </div>
        <p className="BP-name">{props.name}</p>
       
        <p className="BP-rating">{props.rating}</p>
        <p className="BP-author">{props.author}</p>
        

        {/* <p className="BP-likes">{props.likes}</p> */}
    </div>
    </div>);
}

export default BookPane;

BookPane.prototype = {
   bookid:PropTypes.number.isRequired,
   onOpinion:PropTypes.func.isRequired,
};