import React from 'react'

const Tweet = ({ tweet }) => {
    return (
        <div className='tweet'>
            <img className='tweet__avatar' src={tweet.avatar} alt='' />
            <div className='tweet__body'>
                <div className='tweet__body__header'>
                    <span className='tweet__body__header__name'>
                        {tweet.name}
                    </span>
                    <span className='tweet__body__header__username'>
                        @{tweet.username}
                    </span>
                </div>
                <p className='tweet__body__content'>{tweet.content}</p>
            </div>
        </div>
    )
}

export default Tweet
