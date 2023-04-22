import React from "react";
import BlogCard from "src/common/BlogCard";
import Container from "src/common/Container";
import BlogBanner from "./BlogBanner";
const BlogList = () => {
    return (
        <Container>
            <div className="flex flex-col w-full gap-8 py-8 lg:flex lg:flex-row justify-evenly">
                <div className=" grid grid-cols-1 lg:grid lg:grid-cols-2 gap-4 ">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="flex flex-col gap-4">
                    <BlogBanner label="Social" label1="counter" />
                    <BlogBanner label="Instagram" label1="feed" />
                    <BlogBanner label="Recent" label1="blog" />
                </div>
            </div>
        </Container>
    );
};

export default BlogList;
