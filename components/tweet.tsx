/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { children } from '../variable_types'

export type tweetProps = {
    avatar: string
    children: children
    isAlign?: boolean
    isSeparated?: boolean
}
const Tweet: React.FC<tweetProps> = ({
    avatar,
    children,
    isAlign,
    isSeparated,
}) => {
    return (
        <div className='tweet' style={isAlign ? { alignItems: 'center' } : {}}>
            <div className='tweet__avatar-separator'>
                <figure className='tweet__avatar'>
                    <img
                        className='tweet__avatar--image'
                        src={avatar}
                        alt='avatar'
                    />
                </figure>
                {isSeparated ? <div className='tweet__separator'></div> : null}
            </div>
            {children}
        </div>
    )
}

export default Tweet
