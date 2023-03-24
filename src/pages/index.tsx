import { NextPage } from "next";
import React from "react";
import Layout from "src/common/Layout/Layout";
import Home from "src/components/Home";

const index: NextPage = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default index;
