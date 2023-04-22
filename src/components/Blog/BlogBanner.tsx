import React from "react";
interface iBlogBanner {
    label: string;
    label1: string;
}
const BlogBanner: React.FC<iBlogBanner> = ({ label, label1 }) => {
    return (
        <div className="w-[280px]  border border-[#027F89]/[.1] p-2">
            <p>
                <span className="text-lg text-primary-700">{label}</span>{" "}
                <span>{label1}</span>
            </p>
        </div>
    );
};

export default BlogBanner;
