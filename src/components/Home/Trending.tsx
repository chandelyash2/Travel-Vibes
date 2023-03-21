import React from "react";
import TrendingCards from "src/common/Cards/TrendingCards";
import Container from "src/common/Container";

const Trending = () => {
    return (
        <div className="mt-2 lg:mt-12">
            <Container>
                <div className="flex flex-col  gap-2 lg:gap-4 ">
                    <h1 className="text-3xl lg:text-5xl">
                        <span className="text-primary-700">Trending</span>{" "}
                        <span>blogs</span>
                    </h1>
                    <p>
                        Climb mountains not so that the world can see you but so
                        that you can see the world.
                    </p>
                    <div className="max-width-[555px] max-h-[656px]">
                        <TrendingCards />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Trending;
