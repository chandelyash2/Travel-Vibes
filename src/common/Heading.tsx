import React from "react";

interface iHeading {
    label1: string;
    label2: string;
}
const Heading: React.FC<iHeading> = ({ label1, label2 }) => {
    return (
        <h1 className="text-3xl lg:text-5xl">
            <span className="text-primary">{label1}</span> <span>{label2}</span>
        </h1>
    );
};

export default Heading;
