/* eslint-disable @next/next/no-img-element */
import React from "react";
import BlogInfo from "./BlogInfo";

const SingleBlog = () => {
    return (
        <div className="flex flex-col gap-8">
            <img
                src="/Temple.jpg"
                width={100}
                height={100}
                className="w-full h-[500px] lg:h-auto object-cover"
                alt="home"
            />
            <div className="absolute text-white w-full flex justify-center items-center h-[500px] lg:h-[800px]">
                <h2 className="text-2xl  lg:text-7xl ">Hidimba Devi Temple</h2>
            </div>
            <BlogInfo />
        </div>
    );
};

export default SingleBlog;
