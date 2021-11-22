import React from 'react'
import Tweet from './tweet'
import avatar from '../assets/img/jpg/profile-pic.jpg'
import TweetPostFooter from './tweet_post_footer'

const ArbitraryTweet = (props: any) => {
    return (
        <Tweet avatar={avatar.src} isAlign isSeparated={!props.last}>
            <div className='tweet-post'>
                <h2 className='heading5-bold'>
                    Triggac4
                    <span className='tweet-post__username'>@triggac4</span>
                </h2>
                <div className='tweet-post__content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    assumenda cum mollitia illum eius quis quisquam, sapiente
                    officia accusamus obcaecati excepturi eligendi recusandae
                    eaque? Debitis ad vel eos. Reprehenderit, tenetur!
                </div>
                <TweetPostFooter
                    messages={6}
                    retweets={2}
                    likes={3}
                    onClickLike={() => {}}
                    onClickRetweet={() => {}}
                    onClickMessage={() => {}}
                    onClickShare={() => {}}
                    isLiked={false}
                />
            </div>
        </Tweet>
    )
}

export default ArbitraryTweet
