import React from "react";
import SearchBar from "../components/search_bar";
import { children } from "../variable_types";

type LayoutProps = {
    children: children;
};

const Layout = function ({ children }: LayoutProps) {
    return (
        <div className="layout">
            <aside className="layout__sidebar">sidebar</aside>
            <main className="layout__main">{children}</main>
            <aside className="layout__search">
                <SearchBar />
            </aside>
        </div>
    );
};

export default Layout;
