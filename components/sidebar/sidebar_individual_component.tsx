import React from "react";
import { children } from "../../variable_types";

type sidebarCompProp = {
    children: children;
};
const SidebarComps = ({ children }: sidebarCompProp) => {
    return <a className="sidebar-component">{children}</a>;
};

export default SidebarComps;
