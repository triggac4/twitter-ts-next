/* eslint-disable @next/next/no-img-element */
import React from "react";
import { children } from "../variable_types";

export type tweetProps = {
    avatar: string;
    children: children;
    align?: boolean;
};
const Tweet: React.FC<tweetProps> = ({ avatar, children, align }) => {
    return (
        <div
            className="tweet p-x-medium p-t-medium"
            style={align ? { alignItems: "center" } : {}}
        >
            <figure className="tweet__avatar">
                <img
                    className="tweet__avatar--image"
                    src={avatar}
                    alt="avatar"
                />
            </figure>
            {children}
        </div>
    );
};

export default Tweet;
