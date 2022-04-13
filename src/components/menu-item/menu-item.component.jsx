import React from "react";

import "./menu-item.styles.scss"

const MenuItem = ({ children }) => {
    return (
        <div id="menu-item">
            <span>{children}</span>
        </div>
    )
}

export default MenuItem