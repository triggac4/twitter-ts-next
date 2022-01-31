import React from "react";

import Header from "../components/header";
import SearchBar from "../components/search_bar";
import Trends from "../components/twitter_trends";
import { children } from "../variable_types";

type LayoutProps = {
    children: children;
};

const Layout = function ({ children }: LayoutProps) {
    return (
        <div className="layout">
            <header className="layout__header">
                <Header title="Home" />
                <SearchBar />
            </header>
            <aside className="layout__sidebar">sidebar</aside>
            <main className="layout__main">{children}</main>
            <aside className="layout__search">
                <Trends />
            </aside>
        </div>
    );
};

export default Layout;
