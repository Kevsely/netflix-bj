import React from "react";

import "./user-button.styles.scss" 

const UserButton = () => {
    return (
        <div className="user-button">
            <div className="circle-container">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
            </div>
        </div>
    )
}

export default UserButton