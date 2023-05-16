/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Title from "src/common/Title";

const StoriesCardMobile = () => {
    return (
        <div className="flex flex-col gap-4 lg:hidden">
            <div className="relative flex flex-col gap-2">
                <img src="Rasol.JPG" className="max-h-[540px]" alt="stories" />
                <div className="absolute  bg-mask bg-no-repeat w-full min-h-[160px] bottom-0 left-0 flex flex-col justify-end pb-4 px-4 ">
                    <Title label="India’s most beautiful  place all must visit" />
                    <p>
                        <span>
                            This place is situated in Himachal Pradesh's Kangra{" "}
                        </span>
                        <span className="text-primary cursor-pointer">
                            Read More...
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoriesCardMobile;
