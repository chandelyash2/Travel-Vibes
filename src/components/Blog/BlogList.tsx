import React from "react";
import BlogCard from "src/common/BlogCard";
import Container from "src/common/Container";
import BlogBanner from "./BlogBanner";
import Link from "next/link";
import Image from "next/image";
const socialLinks = [
    {
        name: "Facebook",
        url: "/facebook.png",
    },
    {
        name: "Instagram",
        url: "/instagram.png",
    },
    {
        name: "Twitter",
        url: "/twitter.png",
    },
];
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
                    <BlogBanner label="Social" label1="counter">
                        <div className="flex gap-4 ">
                            {socialLinks.map((item, i) => (
                                <div
                                    className="text-center border border-[#027F89]/[.1] w-[32px] h-[32px]"
                                    key={i}
                                >
                                    <Link href="/">a</Link>
                                </div>
                            ))}
                        </div>
                    </BlogBanner>
                    <BlogBanner label="Instagram" label1="feed">
                        <div className="flex w-full flex-wrap justify-around gap-4">
                            <Image
                                src="/Rasol.JPG"
                                width="200"
                                height="100"
                                alt="img"
                                className="w-[100px] h-[100px]"
                            />
                            <Image
                                src="/Rectangle.png"
                                width="200"
                                height="100"
                                alt="img"
                                className="w-[100px] h-[100px]"
                            />
                            <Image
                                src="/Rasol.JPG"
                                width="200"
                                height="100"
                                alt="img"
                                className="w-[100px] h-[100px]"
                            />
                            <Image
                                src="/Rectangle.png"
                                width="200"
                                height="100"
                                alt="img"
                                className="w-[100px] h-[100px]"
                            />
                        </div>
                    </BlogBanner>
                    <BlogBanner label="Recent" label1="blog">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="">
                                    <Image
                                        src="/Rectangle.png"
                                        width="200"
                                        height="100"
                                        alt="img"
                                        className="w-[130px] h-[70px]"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <p className="text-primary font-bold">
                                        Rohtang Pass Tourist Permit, Himachal
                                    </p>
                                    <span>1 day ago</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="">
                                    <Image
                                        src="/lahaul.jpeg"
                                        width="200"
                                        height="100"
                                        alt="img"
                                        className="w-[130px] h-[70px]"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <p className="text-primary font-bold">
                                        Rohtang Pass Tourist Permit, Himachal
                                    </p>
                                    <span>2 day ago</span>
                                </div>
                            </div>
                        </div>
                    </BlogBanner>
                </div>
            </div>
        </Container>
    );
};

export default BlogList;
