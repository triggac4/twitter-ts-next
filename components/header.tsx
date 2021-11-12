import React from 'react'
import { children } from '../variable_types'
type headerProps = {
    title: children
    suffix?: children
}
const Header = ({ title, suffix }: headerProps) => {
    return (
        <div className='header'>
            <div className='header__title'>{title}</div>
            <div className='header__suffix'>{suffix}</div>
        </div>
    )
}
export default Header
