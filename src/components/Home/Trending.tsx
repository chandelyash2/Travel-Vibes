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
                        <div className="max-h-[500px]">
                            <ImageWrapper />
                            <Title label="India’s most beautiful  place all must visit" />
                        </div>
                        <div className="flex flex-col max-h-[500px] gap-4">
                            <div className="max-h-[243px]">
                                <ImageWrapper />
                            </div>
                            <div className="max-h-[243px]">
                                <ImageWrapper />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Trending;
