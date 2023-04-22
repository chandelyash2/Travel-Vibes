import React from "react";
import BlogCard from "src/common/BlogCard";
import Button, { ButtonType } from "src/common/Button";
import Container from "src/common/Container";
import Heading from "src/common/Heading";

const Popular = () => {
    return (
        <Container>
            <div className="flex flex-col text-center  lg:text-center gap-4 py-8">
                <Heading label1="Popular" label2="blogs" />
                <p className="text-lg">
                    Remember that happiness is a way of travel, not a
                    destination.
                </p>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-4 ">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <Button
                    variant={ButtonType.Varaint1}
                    label="View More"
                    type="button"
                />
            </div>
        </Container>
    );
};

export default Popular;
