import React from 'react'
import Header from '../../components/header'
import Layout from '../../hoc/layout'
import NewTweet from '../../components/new_tweet'
const Home = () => {
    return (
        <Layout>
            <div className='home'>
                <Header title='Home' />
                <NewTweet onChange={() => {}} />
            </div>
        </Layout>
    )
}

export default Home
