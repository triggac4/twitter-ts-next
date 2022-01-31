import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

import { children } from "../variable_types";

interface trendsProps {
    children: children;
}
type trendProps = {
    topic: String;
    title: String;
    count: Number;
};
const _Trend = ({ topic, title, count }: trendProps) => {
    return (
        <div className="trend">
            <div className="trend__topic">
                {topic} <BsThreeDots />
            </div>
            <div className="trend__title">{title}</div>
            <div className="trend__count">{`${count}k tweets`}</div>
        </div>
    );
};
const Trends = () => {
    const data = [
        { head: "Technology · Trending", title: "Git hub", count: 56 },
        {
            head: "Technology · Trending",
            title: "#100DaysOfCode",
            count: 26,
        },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
        { head: "Trending in Nigeria", title: "Bae U", count: 156 },
    ];
    const dataJsx = data.map(({ head, title, count }, i) => {
        return <_Trend count={count} title={title} topic={head} key={i} />;
    });

    return (
        <div className="trends">
            <div className="trends__header heading4">
                bla bla <FiSettings />
            </div>
            <div className="trends__body">{dataJsx}</div>
        </div>
    );
};

export default Trends;
