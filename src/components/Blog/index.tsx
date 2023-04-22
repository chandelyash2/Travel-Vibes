/* eslint-disable @next/next/no-img-element */
import React from "react";
import BlogList from "./BlogList";

const Blog = () => {
    return (
        <div className="flex flex-col gap-8">
            <img
                src="/Lahaul.jpeg"
                className="w-full h-[500px] lg:h-auto object-cover"
                alt="lahaul"
            />
            <div className="absolute text-white w-full flex justify-center items-center h-[500px] lg:h-[800px]">
                <h2 className="text-2xl  lg:text-7xl ">Lahaul</h2>
            </div>
            <BlogList />
        </div>
    );
};

export default Blog;
