import React from "react";

function ReviewDisplay({review}){
    const {comment,user,date_created, date_updated} = review
    return(
        <div className="review-section">
            <p>{user.username}</p>
            <p>{comment}</p>
            <p>{!date_updated ? date_created: date_updated}</p>
        </div>
    )
}

export default ReviewDisplay;