import React from "react";
import Layout from "../../hoc/layout";
import NewTweet from "../../components/new_tweet";
import MultipleTweetContainer from "../../components/multiple_tweet_container";
const Home = () => {
    return (
        <Layout>
            <div className="home">
                <NewTweet onChange={() => {}} />
            </div>
        </Layout>
    );
};

export default Home;
