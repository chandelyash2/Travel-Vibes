import React from "react";
import TrendingCards from "src/common/Cards/TrendingCards";
import Container from "src/common/Container";

const Trending = () => {
    return (
        <div className="mt-2 lg:mt-12">
            <Container>
                <div className="flex flex-col py-8 gap-2 lg:gap-4 ">
                    <h1 className="text-3xl lg:text-5xl">
                        <span className="text-primary-700">Trending</span>{" "}
                        <span>blogs</span>
                    </h1>
                    <p>
                        Climb mountains not so that the world can see you but so
                        that you can see the world.
                    </p>

                    {/* <div className="grid grid-rows-2 grid-flow-col gap-4 ">
                        <div className="row-span-3 max-h-[656px] overflow-hidden relative">
                            <TrendingCards />
                        </div>
                        <div className="col-span-2 max-h-[318px] overflow-hidden relative">
                            <TrendingCards />
                        </div>
                        <div className="row-span-2 col-span-2 max-h-[318px] overflow-hidden relative">
                            <TrendingCards />
                        </div>
                    </div> */}

                    <div className="flex w-full gap-4 ">
                        <div className="max-h-[500px]">
                            <TrendingCards />
                        </div>
                        <div className="flex flex-col max-h-[500px] gap-4">
                            <div className="max-h-[243px]">
                                <TrendingCards />
                            </div>
                            <div className="max-h-[243px]">
                                <TrendingCards />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Trending;
