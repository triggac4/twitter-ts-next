import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const SearchOptions: React.FC = (props) => {
    return (
        <div className="search-options">
            <div className="search-options__header">
                <h3 className="search-option__title">trends for you</h3>
                <AiOutlineSetting className="search-option__icon" />
            </div>
            {props.children}
        </div>
    );
};

export default SearchOptions;
