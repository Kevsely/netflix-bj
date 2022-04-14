import React from "react";

import "./notification-button.styles.scss"
import { ReactComponent as NotificationIcon } from "../../assets/notification.icon.svg"

const NotificationButton = () => {
    return (
        <div className="notification-button">
            <NotificationIcon />
        </div>
    )
}

export default NotificationButton