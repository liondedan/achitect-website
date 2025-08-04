import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ServicesContent from '../components/ServicesContent';
import { servicesData } from '../data/services';

const ServicesPage: NextPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Services – Architectural Designer</title>
        <meta name="description" content="Explore the architectural design, project management, and building surveying services offered." />
      </Head>

      <Header />

      <main className="main-content">
        <ServicesContent data={servicesData} />
      </main>
    </div>
  );
};

export default ServicesPage;