import React from "react";

interface iContainer {
    children: React.ReactNode;
}
const Container: React.FC<iContainer> = ({ children }) => {
    return (
        <div className="max-w-screen w-full md:max-w-[1162px] m-auto px-4 ">
            {children}
        </div>
    );
};

export default Container;
