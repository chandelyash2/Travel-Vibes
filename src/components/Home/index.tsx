/* eslint-disable @next/next/no-img-element */
import React from "react";
import Trending from "./Trending";
import Bannner from "./Bannner";
import Popular from "./Popular";
import TravelStories from "./TravelStories";
const Home = () => {
    return (
        <div className="flex flex-col gap-8">
            <img
                src="/Home.jpeg"
                className="w-full h-[500px] lg:h-auto object-cover"
                alt="home"
            />
            <Trending />
            <Bannner />
            <Popular />
            <TravelStories />
        </div>
    );
};

export default Home;
