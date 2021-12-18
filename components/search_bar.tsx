import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const searchBar: React.FC = (props) => {
    return (
        <div className="search-bar__container">
            <div className="search-bar">
                <AiOutlineSearch className="search-bar__icon" />
                <input
                    type="text"
                    placeholder="Search"
                    className="search-bar__textfield"
                />
            </div>
        </div>
    );
};

export default searchBar;
