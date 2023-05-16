/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "./Title";

const BlogCard = () => {
    return (
        <div className=" relative m-auto w-full">
            <img src="/Rectangle.png" className="w-full" alt="img" />
            <div className="absolute bg-mask object-cover w-full min-h-[160px] bottom-0 left-0 flex flex-col justify-end  px-4 ">
                <Title label="Hadimba Devi Temple - Manali, Himachal" />
                <p>
                    Hadimba Temple, is located in Manali, a hill station in the
                    State of Himachal Pradesh in north India, also known as
                    Dhungari Temple.
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
