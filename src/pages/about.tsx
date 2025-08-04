import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import AboutMeContent from '../components/AboutMeContent';
import { aboutMeData } from '../data/about';

const AboutPage: NextPage = () => {
  const mainImage = aboutMeData.contentBlocks.find(
    (block) => block.type === 'image'
  ) as { url: string } | undefined;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'The Architect', // Placeholder name
    jobTitle: 'Architectural Designer',
    image: mainImage?.url || '/placeholder-image.jpg', // Fallback image
    url: 'https://www.yourwebsite.com/about', // Placeholder URL
  };

  return (
    <div className="page-container">
      <Head>
        <title>About Me - Architect Portfolio</title>
        <meta name="description" content="Learn more about the architect, their background, and their design philosophy." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Me - Architect Portfolio" />
        <meta property="og:description" content="Learn more about my background and design philosophy as an architectural designer." />
        <meta property="og:image" content={mainImage?.url || '/placeholder-image.jpg'} />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>


      <main className="main-content">
        <div className="page-header">
          <h1>About Me</h1>
        </div>
        <AboutMeContent data={aboutMeData} />
      </main>
    </div>
  );
};

export default AboutPage;