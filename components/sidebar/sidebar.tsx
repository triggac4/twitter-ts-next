import React from "react";
import {
    AiOutlineTwitter,
    AiOutlineHome,
    AiOutlineBell,
    AiOutlineMail,
} from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrMore } from "react-icons/gr";

import IndividualComp from "./sidebar_individual_component";

const sidebar_database = [
    {
        icon: <AiOutlineTwitter className="sidebar-icon" />,
    },
    { icon: <AiOutlineHome className="sidebar-icon" />, title: "home" },
    { icon: <BiHash className="sidebar-icon" />, title: "explore" },
    {
        icon: <AiOutlineBell className="sidebar-icon" />,
        title: "notifications",
    },
    { icon: <AiOutlineMail className="sidebar-icon" />, title: "messages" },
    { icon: <CgProfile className="sidebar-icon" />, title: "profile" },
    { icon: <GrMore className="sidebar-icon" />, title: "more" },
];

const comps = sidebar_database.map(({ icon, title }, i) => {
    return (
        <div key={i}>
            <IndividualComp>
                {icon}
                <h4 className="sidebar-title">{title}</h4>
            </IndividualComp>
        </div>
    );
});

const Sidebar = () => {
    return <nav className="sidebar">{comps}</nav>;
};

export default Sidebar;
