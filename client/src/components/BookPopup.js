import React from "react";
import ReactDOM from 'react-dom';
import Bookpage from "./BookPage";

function BookPopup({isOpen, onClose, book, reviews, fetchReviews, user, showForm, handleClick}){
    if (!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="popup-overlay">
        <div className="popup">
            <span className="close-popup" onClick={onClose}>&times;</span>
                <Bookpage book={book} reviews={reviews} fetchReviews={fetchReviews} user={user} showForm={showForm} handleClick={handleClick}/>
            </div>
        </div>,
        document.body
    )
    
}

    export default BookPopup;