import React from "react";
import BlogBanner from "src/components/Blogs/BlogBanner";
import Image from "next/image";
const RecentBlog = () => {
    return (
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
    );
};

export default RecentBlog;
