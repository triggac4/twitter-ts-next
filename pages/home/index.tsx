import React from "react";
import Layout from "../../hoc/layout";
import NewTweet from "../../components/new_tweet";
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
