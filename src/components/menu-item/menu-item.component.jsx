import React from "react";

import "./menu-item.styles.scss"

const MenuItem = ({ children, active }) => {
    return (
        <div className={`menu-item ${active ? "active" : ""}`} >
            <span>{children}</span>
        </div>
    )
}

export default MenuItem