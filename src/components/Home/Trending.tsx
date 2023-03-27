/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "src/common/Container";
import Heading from "src/common/Heading";
import ImageWrapper from "src/common/ImageWrapper";
import Title from "src/common/Title";
const Trending = () => {
    return (
        <div className="hidden lg:flex lg:mt-12">
            <Container>
                <div className="flex flex-col py-8 gap-2 lg:gap-4 ">
                    <Heading label1="Trending" label2="blogs" />
                    <p>
                        Climb mountains not so that the world can see you but so
                        that you can see the world.
                    </p>

                    <div className="flex  gap-4 ">
                        <div className="flex flex-col max-h-[550px] gap-2">
                            <ImageWrapper />
                            <img
                                src="/Mask group.png"
                                className="relative bottom-[130px]"
                            />
                            <div className="relative bottom-[250px] px-4">
                                <Title label="India’s most beautiful  place all must visit" />
                                <p className="">
                                    <span>
                                        This place is situated in Himachal
                                        Pradesh's Kangra{" "}
                                    </span>
                                    <span className="text-primary-700">
                                        Read More...
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col max-h-[620px] gap-2">
                            <div className="max-h-[230px]">
                                <ImageWrapper />
                                <img
                                    src="/Mask group.png"
                                    className="relative bottom-[100px]"
                                />
                            </div>
                            <div className="relative px-2 gap-2 flex flex-col">
                                <Title label="India’s most beautiful  place all must visit" />
                                <p className="">
                                    <span>
                                        This place is situated in Himachal
                                        Pradesh's Kangra{" "}
                                    </span>
                                    <span className="text-primary-700 cursor-pointer">
                                        Read More...
                                    </span>
                                </p>
                            </div>
                            <div className="max-h-[230px]">
                                <ImageWrapper />
                                <img
                                    src="/Mask group.png"
                                    className="relative bottom-[100px]"
                                />
                            </div>
                            <div className=" relative px-2 gap-2 flex flex-col">
                                <Title label="India’s most beautiful  place all must visit" />
                                <p className="">
                                    <span>
                                        This place is situated in Himachal
                                        Pradesh's Kangra{" "}
                                    </span>
                                    <span className="text-primary-700 cursor-pointer">
                                        Read More...
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Trending;
