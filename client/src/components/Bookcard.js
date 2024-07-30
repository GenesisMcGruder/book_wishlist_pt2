import React, {useEffect, useState} from "react";
import BookPopup from "./BookPopup";

function Bookcard({book, addToWishlist, wishlists, deleteFromWishlist, user, showForm, handleClick}){
    const {id,title, author, image, page_count, genre} = book
    const [reviews,setReviews] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)
    const bookId = book.id

    useEffect(()=>{
        const existInWishlist = wishlists && wishlists.length > 0 && wishlists.some(wishlistBook => wishlistBook.id === id);
        setIsAdded(existInWishlist)  
    },[wishlists,id])

    function handleClick(){
        if (isAdded){
            deleteFromWishlist(user.id, book.id)
            setIsAdded(false)
            console.log(`${title} has successfully removed from wishlist`)
        } else{
            addToWishlist(user,book)
            setIsAdded(true)
            console.log(`${title} has successfully added to wishlist`)
        }
    }

    function fetchReviews(bookId){
        fetch(`/reviews/${bookId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              setReviews(data);
            })
            .catch((error) => {
              console.error("Error fetching wishlist:", error);
              setReviews([]);
            });
        }

    function openPopup(){
        setPopupOpen(true)
        fetchReviews(bookId)
    }

    function closePopup(){
        setPopupOpen(false)
    }

    return(
        <div className="book-card">
            <img className="book-img" src={image} alt='book img'/>
            <h3>{title}</h3>
            <h4>Author: {author}</h4>
            <p>Page Count: {page_count}</p>
            <p>Genre: {genre}</p>
            <button className="wishlist" onClick={handleClick}>
                {isAdded?"Remove from Wishlist":"Add to Wishlist"}
            </button>
            <br/>
            <button className="view-details" onClick={openPopup}>
                View details
            </button>
            <BookPopup 
            isOpen={popupOpen} 
            onClose={closePopup} 
            book={book} 
            fetchReviews={fetchReviews}
            reviews={reviews}
            user={user}
            showForm={showForm}
            handleClick={handleClick}/>
        </div>
    )
}

export default Bookcard;