import React from "react";
import { Link } from "react-router-dom";

function Logout({user, handleLogout, setIsLoggedIn}){
    function handleDelete(){
        fetch(`/logout/${user.id}`,{
            method:'DELETE',
        })
        .then(()=>{
            handleLogout()
            setIsLoggedIn(false)
        })
    }
    return(
        <div>
            <h1 className="logout-header">Are you sure you want to Logout?</h1>
            <p className="yes-no"><Link to='/' onClick={handleDelete}>Yes</Link>| <Link to='/Books'>No</Link></p>
        </div>
    )
}

export default Logout;