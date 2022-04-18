import React from "react"

import "./preview-card.styles.scss"

const PreviewCard = ({ orientation }) => {
    return (
        <div className={`preview-card ${orientation==="landscape" ? "landscape" : "portrait"}`}>
            
        </div>
    )
}

export default PreviewCard