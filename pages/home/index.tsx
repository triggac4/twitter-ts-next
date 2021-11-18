import React from 'react'
import Header from '@components/header'
import Layout from '@layout'
import NewTweet from '@components/new_tweet'
import MultipleTweetContainer from '@components/multiple_tweet_container'
import ArbitraryTweet from '@components/arbituary_tweet'
const Home = () => {
    return (
        <Layout>
            <div className='home p-x-medium'>
                <Header title='Home' />
                <NewTweet onChange={() => {}} className='p-t-medium' />
                <MultipleTweetContainer>
                    <ArbitraryTweet />
                    <ArbitraryTweet />
                    <ArbitraryTweet last={true} />
                </MultipleTweetContainer>
            </div>
        </Layout>
    )
}

export default Home
