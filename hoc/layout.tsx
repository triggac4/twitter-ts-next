import React from 'react'
import { children } from '../variable_types'

type LayoutProps = {
    children: children
}

const Layout = function ({ children }: LayoutProps) {
    return (
        <div className='layout'>
            <aside className='layout__sidebar'>sidebar</aside>
            <main className='layout__main'>{children}</main>
            <aside className='layout__search'>search</aside>
        </div>
    )
}

export default Layout
