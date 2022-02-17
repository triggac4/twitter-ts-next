/* eslint-disable @next/next/no-img-element */
import React from "react";
import { children } from "../../variable_types";

export type tweetButtonProps = {
    value?: string | Number;
    children: children;
    type: string;
};

const TweetButtons: React.FC<tweetButtonProps> = ({
    children,
    value,
    type,
}) => {
    return (
        <div className={"tweet-button " + type}>
            <div className="tweet-button__container">{children}</div>
            {value}
        </div>
    );
};

export default TweetButtons;
