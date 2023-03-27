/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "src/common/Container";
import Heading from "src/common/Heading";
import ImageWrapper from "src/common/ImageWrapper";
import Title from "src/common/Title";

const TrendingMobile = () => {
    return (
        <div className="mt-2 lg:hidden">
            <Container>
                <div className="flex flex-col py-8 gap-2 lg:gap-4 ">
                    <Heading label1="Trending" label2="blogs" />
                    <p>
                        Climb mountains not so that the world can see you but so
                        that you can see the world.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                            <p className="">
                                <span>
                                    This place is situated in Himachal Pradesh's
                                    Kangra{" "}
                                </span>
                                <span className="text-primary-700 cursor-pointer">
                                    Read More...
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                            <p className="">
                                <span>
                                    This place is situated in Himachal Pradesh's
                                    Kangra{" "}
                                </span>
                                <span className="text-primary-700 cursor-pointer">
                                    Read More...
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                            <p className="">
                                <span>
                                    This place is situated in Himachal Pradesh's
                                    Kangra{" "}
                                </span>
                                <span className="text-primary-700 cursor-pointer">
                                    Read More...
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrendingMobile;
