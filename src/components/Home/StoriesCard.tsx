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
    return (
        <div className="hidden lg:flex lg:justify-evenly  gap-4 ">
            <div className="flex flex-col max-h-[550px] gap-2">
                <img src="Rasol.JPG" className="max-h-[540px]" />
                <Title label={trendingList[0].title} />
                <p>
                    <span>{trendingList[0].content}</span>
                    <span className="text-primary-700"> Read More...</span>
                </p>
            </div>
            <div className="flex flex-col max-h-[620px] gap-2">
                <img src="Rasol.JPG" className="max-h-[230px]" />

                <div className=" px-2 gap-2 flex flex-col">
                    <Title label={trendingList[1].title} />
                    <p>
                        <span>{trendingList[1].content}</span>
                        <span className="text-primary-700"> Read More...</span>
                    </p>
                </div>

                <img src='Rasol.JPG' className="max-h-[230px] w-full" />

                <div className="  px-2 gap-2 flex flex-col">
                    <Title label={trendingList[2].title} />
                    <p>
                        <span>{trendingList[2].content}</span>
                        <span className="text-primary-700"> Read More...</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoriesCard;
