import React from "react";
import UpdateUser from "./UpdateUser";

function UserProfile({user, handleClick, showForm, setUser, setIsLoggedIn, setShowForm}){
    const {username, email} = user
    return (
        <div className="user-profile">
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            {showForm ? <UpdateUser user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} setShowForm={setShowForm}/>: null}
            <div className="show-update-form" onClick={handleClick}>Update Profile</div>
        </div>
    )
}

export default UserProfile;