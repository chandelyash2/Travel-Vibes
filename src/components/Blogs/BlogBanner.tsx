import React from "react";
interface iBlogBanner {
    label: string;
    label1: string;
    children: React.ReactNode;
}
const BlogBanner: React.FC<iBlogBanner> = ({ label, label1, children }) => {
    return (
        <div className="flex flex-col gap-4 min-w-[280px]  border border-[#027F89]/[.1] p-2">
            <p>
                <span className="text-lg text-primary">{label}</span>{" "}
                <span>{label1}</span>
            </p>
            {children}
        </div>
    );
};

export default BlogBanner;
