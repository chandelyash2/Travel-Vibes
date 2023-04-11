/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "src/common/Container";
import Heading from "src/common/Heading";
import StoriesCard from "./StoriesCard";
import StoriesCardMobile from "./StoriesCardMobile";

const Trending = () => {
    return (
      
            <Container>
                <div className="flex flex-col py-8 gap-4 ">
                    <Heading label1="Trending" label2="blogs" />
                    <p>
                        Climb mountains not so that the world can see you but so
                        that you can see the world.
                    </p>
                    <StoriesCard />
                    <StoriesCardMobile/>
                </div>
            </Container>
      
    );
};

export default Trending;
