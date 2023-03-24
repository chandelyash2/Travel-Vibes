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
                        <div>
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                        </div>
                        <div>
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                        </div>
                        <div>
                            <div className="h-[300px] ">
                                <ImageWrapper />
                            </div>
                            <Title label="India’s most beautiful  place all must visit" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrendingMobile;
