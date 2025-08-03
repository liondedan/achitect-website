import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import AboutMeContent from '../components/AboutMeContent';
import { aboutMeData } from '../data/about';

const AboutPage: NextPage = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'The Architect', // Placeholder name
    jobTitle: 'Architectural Designer',
    image: aboutMeData.imageUrl,
    url: 'https://www.yourwebsite.com/about', // Placeholder URL
  };

  return (
    <div className="page-container">
      <Head>
        <title>About Me – Architectural Designer</title>
        <meta name="description" content="Learn more about my background and design philosophy as an architectural designer." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Me – Architectural Designer" />
        <meta property="og:description" content="Learn more about my background and design philosophy as an architectural designer." />
        <meta property="og:image" content={aboutMeData.imageUrl} />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <Header />

      <main className="main-content">
        <AboutMeContent data={aboutMeData} />
      </main>
    </div>
  );
};

export default AboutPage;