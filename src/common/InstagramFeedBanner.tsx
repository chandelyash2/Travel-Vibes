import React from "react";
import BlogBanner from "src/components/Blogs/BlogBanner";
import Image from "next/image";
const InstagramFeed = () => {
    return (
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
            </div>
        </BlogBanner>
    );
};

export default InstagramFeed;
