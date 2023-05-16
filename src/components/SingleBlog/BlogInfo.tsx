/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "src/common/Container";
import InstagramFeed from "src/common/InstagramFeedBanner";
import RecentBlog from "src/common/RecentBlog";
import SocialCounter from "src/common/SocialCounter";

const BlogInfo = () => {
    return (
        <Container>
            <div className="flex flex-col w-full gap-8 py-8 lg:flex lg:flex-row justify-evenly">
                <div className="flex flex-col gap-4">
                    <img
                        src="/Rectangle.png"
                        className="w-full max-h-[500px] object-contain"
                        alt="img"
                    />
                    <h2 className="text-primary text-2xl ">
                        Hidimba Devi Temple - Manali, Himachal
                    </h2>
                    <p className="font-serif ">
                        Hadimba Temple, is located in Manali, a hill station in
                        the State of Himachal Pradesh in north India, also known
                        as Dhungari Temple.
                    </p>
                    <p className="font-serif">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="font-serif">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
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

export default BlogInfo;
