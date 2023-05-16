/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import Title from "src/common/Title";

const StoriesCard = () => {
    const trendingList = [
        {
            title: "India’s most beautiful  place all must visit",
            content: "This place is situated in Himachal Pradesh's Kangra ",
        },
        {
            title: "India’s most beautiful  place all must visit",
            content: "This place is situated in Himachal Pradesh's Kangra ",
        },
        {
            title: "India’s most beautiful  place all must visit",
            content: "This place is situated in Himachal Pradesh's Kangra ",
        },
    ];
    const router = useRouter();
    return (
        <div className="hidden  lg:flex lg:justify-evenly  gap-4 ">
            <div
                className="flex relative flex-col w-[50%] max-h-[550px] gap-2 cursor-pointer"
                onClick={() => router.push("/blog/abc")}
            >
                <img
                    src="Rasol.JPG"
                    className="max-h-[540px] w-full"
                    alt="stories"
                />
                <div className="absolute  bg-mask  w-full min-h-[160px] bottom-0 left-0 flex flex-col justify-end pb-4  px-4 ">
                    <Title label={trendingList[0].title} />
                    <p>
                        <span>{trendingList[0].content}</span>
                        <span className="text-primary"> Read More...</span>
                    </p>
                </div>
            </div>
            <div className=" flex flex-col w-[50%] max-h-[620px] gap-2 ">
                <div className="relative">
                    <img
                        src="Rasol.JPG"
                        className="max-h-[266px] w-full object-cover"
                        alt="stories"
                    />

                    <div className="absolute object-cover bg-mask  w-full h-full max-h-[150px] bottom-0 left-0 flex flex-col justify-end pb-4 px-4">
                        <Title label={trendingList[1].title} />
                        <p>
                            <span>{trendingList[1].content}</span>
                            <span className="text-primary"> Read More...</span>
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="Rasol.JPG"
                        className="max-h-[266px] w-full object-cover"
                        alt="stories"
                    />

                    <div className="absolute bg-mask object-cover  w-full min-h-[160px] bottom-0 left-0 flex flex-col justify-end pb-4 px-4 ">
                        <Title label={trendingList[2].title} />
                        <p>
                            <span>{trendingList[2].content}</span>
                            <span className="text-primary"> Read More...</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesCard;
