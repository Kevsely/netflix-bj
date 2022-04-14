import React from "react"

import MenuItem from "../menu-item/menu-item.component"
import NotificationButton from "../notification-button/notification-button.component"
import SearchButton from "../search-button/search-button.component"
import UserButton from "../user-button/user-button.component"

import "./header.styles.scss"

const Header = () => (
    <div className="header">
        <div className="logo">NETFLIX-BJ</div>

        <div className="menu-items">
            <MenuItem active>Home</MenuItem>
            <MenuItem>Series</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>Watchlist</MenuItem>
        </div>

        <div className="menu-buttons">
            <NotificationButton />
            <SearchButton />
            <UserButton />
        </div>
    </div>
)

export default Header