import { NextPage } from "next";
import React from "react";
import Layout from "common/Layout/Layout";
import Home from "components/Home";

const index: NextPage = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default index;
