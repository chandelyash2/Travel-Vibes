import React from "react";
import Trending from "./Trending";
const Home = () => {
    return (
        <div className="flex flex-col gap-8">
            <img
                src="/Home.jpeg"
                className="w-full h-[500px] lg:h-auto object-cover"
            />
            <Trending />
        </div>
    );
};

export default Home;
