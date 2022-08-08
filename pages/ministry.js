import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Ministry from "../components/Ministry";


const MinistryPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Our Ministries">
            <NavOne />
            <PageHeader title="Our Ministries" />
            <Ministry/>
            <Footer />
        </Layout>
    );
};

export default MinistryPage;
