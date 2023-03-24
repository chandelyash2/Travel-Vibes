import React from "react";
interface iTitle {
    label: string;
}
const Title: React.FC<iTitle> = ({ label }) => {
    return <h3 className="text-lg text-primary-700 lg:text-2xl">{label}</h3>;
};

export default Title;
