import React from "react";

import "./search-button.styles.scss"
import { ReactComponent as SearchIcon } from "../../assets/search.icon.svg"

const SearchButton = () => {
    return (
        <div className="search-button">
            <SearchIcon />
        </div>
    )
}

export default SearchButton