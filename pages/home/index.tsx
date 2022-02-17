import React from "react";
import Layout from "../../hoc/layout";
import NewTweet from "../../components/tweet/new_tweet";
import MultipleTweetContainer from "../../components/tweet/multiple_tweet_container";
import Tweet from "../../components/tweet/tweet";
import avatar from "../../assets/img/jpg/profile-pic.jpg";
const Home = () => {
    return (
        <Layout>
            <div className="home">
                <NewTweet onChange={() => {}} />
                <MultipleTweetContainer>
                    <Tweet avatar={avatar.src}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos quam quidem unde earum minus accusamus illo
                        quis exercitationem et mollitia. Unde, esse voluptate
                        blanditiis vero ullam harum libero deserunt laudantium!
                    </Tweet>
                    <Tweet avatar={avatar.src}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos quam quidem unde earum minus accusamus illo
                        quis exercitationem et mollitia. Unde, esse voluptate
                        blanditiis vero ullam harum libero deserunt laudantium!
                    </Tweet>
                    <Tweet avatar={avatar.src}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos quam quidem unde earum minus accusamus illo
                        quis exercitationem et mollitia. Unde, esse voluptate
                        blanditiis vero ullam harum libero deserunt laudantium!
                    </Tweet>
                </MultipleTweetContainer>
            </div>
        </Layout>
    );
};

export default Home;
