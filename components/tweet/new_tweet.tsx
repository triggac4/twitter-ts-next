import React from "react";
import { RiGalleryFill } from "react-icons/ri";
import {
    AiOutlineFileGif,
    AiOutlineBarChart,
    AiFillSchedule,
} from "react-icons/ai";

import MultipleTweetContainer from "./multiple_tweet_container";
import { GrEmoji } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import Header from "../header";
import Tweet from "./tweet";
import avatar from "../../assets/img/jpg/profile-pic.jpg";

type newTweetProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const NewTweet = ({ onChange }: newTweetProps) => {
    let IconList = [
        <RiGalleryFill key={0} style={{ fontSize: "2rem" }} />,
        <AiOutlineFileGif key={1} style={{ fontSize: "2rem" }} />,
        <AiOutlineBarChart key={2} style={{ fontSize: "2rem" }} />,
        <GrEmoji key={3} style={{ fontSize: "2rem" }} />,
        <AiFillSchedule key={4} style={{ fontSize: "2rem" }} />,
    ].map((icon, index) => {
        return (
            <button className="new-tweet__iconButton" key={index}>
                {icon}
            </button>
        );
    });
    return (
        <div className="new-tweet">
            <Tweet avatar={avatar.src} isNew>
                <input
                    type="text"
                    className="new-tweet__textfield"
                    placeholder={"What's happening?"}
                    onChange={onChange}
                />
                <div className="new-tweet__reply">
                    <BiWorld /> Everyone can reply
                </div>
                <div className="new-tweet__buttons">
                    <div>{IconList}</div>
                    <button className="new-tweet__button">Tweet</button>
                </div>
            </Tweet>
            <MultipleTweetContainer></MultipleTweetContainer>
        </div>
    );
};

export default NewTweet;
