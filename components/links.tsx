import React from "react";
import { children } from "../variable_types";
import MultipleTweetContainer from "./tweet/multiple_tweet_container";

type LinksProps = {
    href: string;
    children: children;
    className: string;
};
const Link = (props: LinksProps) => {
    let { href, children, className } = props;
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
};
export default Link;
