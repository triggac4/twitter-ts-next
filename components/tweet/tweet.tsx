/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FiShare } from "react-icons/fi";

import { children } from "../../variable_types";
import TweetButtons from "./tweetButtons";

export type tweetProps = {
    avatar: string;
    children: children;
    isNew?: boolean;
    isMultiple?: boolean;
};
//BiMessageRounded
//AiOutlineRetweet
//AiOutlineHeart
//FiShare

const Tweet: React.FC<tweetProps> = ({
    avatar,
    children,
    isNew,
    isMultiple,
}) => {
    return (
        <div
            className="tweet p-x-medium p-t-medium"
            style={isNew ? { alignItems: "center" } : {}}
        >
            <figure className="tweet__avatar">
                <img
                    className="tweet__avatar--image"
                    src={avatar}
                    alt="avatar"
                />
            </figure>
            {children}
            {isNew || (
                <div className="tweet__buttons">
                    <TweetButtons type="blue" value={20}>
                        <BiMessageRounded className="tweet-button__icon" />
                    </TweetButtons>
                    <TweetButtons type="green" value={10}>
                        <AiOutlineRetweet className="tweet-button__icon" />
                    </TweetButtons>
                    <TweetButtons type="red" value={24}>
                        <AiOutlineHeart className="tweet-button__icon" />
                    </TweetButtons>
                    <TweetButtons type="blue">
                        <FiShare className="tweet-button__icon" />
                    </TweetButtons>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default Tweet;
