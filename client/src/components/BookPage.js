import React from "react";
import ReviewDisplay from "./ReviewDisplay";
import NewReview from "./NewReview";

function Bookpage({book, fetchReviews, reviews, user, showForm,handleClick }){
    const { title, author, image, summary, page_count, genre} = book
    
   
    
    return( 
        <div className="book-page">
            <img className="book-image" src={image} alt='book img'/>
            <h3>{title}</h3>
            <h4>Author: {author}</h4>
            <p>Page Count: {page_count}</p>
            <p>Summary: {summary}</p>
            <p>Genre: {genre}</p>
            <h4>Reviews:</h4>
            {reviews.map((review)=>(
                <ReviewDisplay key={review.id} review={review}/>
            ))}
            <h5>Add a Review</h5>
            <NewReview handleClick={handleClick} fetchReviews={fetchReviews} user={user} book={book}/>
        </div>
    )
}

export default Bookpage;