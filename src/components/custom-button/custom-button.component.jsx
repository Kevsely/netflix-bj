import React from "react"

import "./custom-button.styles.scss"

const CustomButton = ({ children, main }) => {
    return (
        <button className={`${main ? "main" : ""}`}>{ children }</button>
    )
}

export default CustomButton