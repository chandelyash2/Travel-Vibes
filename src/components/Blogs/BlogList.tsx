import React from "react";
import BlogCard from "src/common/BlogCard";
import Container from "src/common/Container";
import SocialCounter from "src/common/SocialCounter";
import InstagramFeed from "src/common/InstagramFeedBanner";
import RecentBlog from "src/common/RecentBlog";

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
                    <SocialCounter />
                    <InstagramFeed />
                    <RecentBlog />
                </div>
            </div>
        </Container>
    );
};

export default BlogList;
