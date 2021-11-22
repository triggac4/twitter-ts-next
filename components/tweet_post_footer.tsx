import React from 'react'

import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IoIosMore } from 'react-icons/io'
import { BsShareFill } from 'react-icons/bs'
//BiMessageRounded
//AiOutlineRetweet
//AiOutlineHeart
//AiFillHeart
//IoIosMore
interface Props {
    messages: number
    retweets: number
    likes: number
    isLiked: boolean
    onClickMessage: () => void
    onClickRetweet: () => void
    onClickLike: () => void
    onClickShare: () => void
}

const TweetPostFooter: React.FC<Props> = ({
    messages,
    retweets,
    likes,
    isLiked,
    onClickLike,
    onClickMessage,
    onClickRetweet,
    onClickShare,
}) => {
    type WrapperProps = {
        amount?: number
        onClick: () => void
        color?: string
    }
    let Wrapper: React.FC<WrapperProps> = ({
        children,
        amount,
        color = 'defaultColor',
    }) => (
        <div className={'tweet-post-footer__button ' + color}>
            <button className={'tweet-post-footer__icon ' + color + '-light'}>
                {children}
            </button>
            <span>{amount}</span>
        </div>
    )

    return (
        <div className='tweet-post-footer'>
            <Wrapper amount={messages} onClick={onClickMessage}>
                <BiMessageRounded />
            </Wrapper>
            <Wrapper
                amount={retweets}
                onClick={onClickRetweet}
                color='greenColor'
            >
                <AiOutlineRetweet />
            </Wrapper>
            <Wrapper amount={likes} onClick={onClickLike} color='redColor'>
                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </Wrapper>
            <Wrapper onClick={onClickShare}>
                <BsShareFill />
            </Wrapper>
        </div>
    )
}
export default TweetPostFooter
