import React from "react";
import Container from "src/common/Container";
import Heading from "src/common/Heading";
import StoriesCard from "./StoriesCard";
import StoriesCardMobile from "./StoriesCardMobile";

const TravelStories = () => {
    return (
      
            <Container>
                <div className="flex flex-col py-8 gap-2 lg:gap-4">
                    <Heading label1="Travel" label2="Stories" />
                    <p className="text-lg">
                        The journey of a thousnad mile begin with a single step
                    </p>
                    <StoriesCard/>
                    <StoriesCardMobile/>
                </div>
            </Container>

    );
};

export default TravelStories;
