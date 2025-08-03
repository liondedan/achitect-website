import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import PortfolioSection from '../components/PortfolioSection';

const portfolioSections = [
  {
    title: 'Homes & Extensions',
    text: [
      'From full new-builds to modest additions, I help clients create homes that feel right — designed around how you live now, and how you might grow into them in future.',
    ],
    imageUrl: '/architect-wales-planning.jpg',
    imageAlt: 'A modern home extension',
  },
  {
    title: 'Barn Conversions & Rural Projects',
    text: [
      'Breathing new life into existing structures while respecting the landscape, history and fabric of the original building — whether traditional stone barns or agricultural outbuildings.',
    ],
    imageUrl: '/wales-architect-designs.jpg',
    imageAlt: 'A converted barn',
  },
  {
    title: 'Listed Buildings & Conservation Areas',
    text: [
      'Carefully considered design within sensitive contexts — including working with conservation officers, listed building consent applications, and detailing that respects a building’s heritage.',
    ],
    imageUrl: '/wales-architect-interior-design.jpg',
    imageAlt: 'A listed building',
  },
];

const PortfolioPage: NextPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Portfolio – Architectural Design Work</title>
        <meta name="description" content="A selection of my featured work as an architectural designer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main-content">
        <div className="page-header">
          <h1>My Work</h1>
          <p>Over the past 30 years, I’ve worked on a broad mix of projects — from modern homes and traditional renovations to commercial and rural buildings. While each project is unique, they all share a common thread: a practical, thoughtful approach, shaped by experience and an understanding of how people really use space.</p>
          <p>Here are some of the project types I’ve worked on:</p>
        </div>
        {portfolioSections.map((section, index) => (
          <PortfolioSection key={index} {...section} />
        ))}
        <div className="page-footer">
          <p>If you’d like to know more about any of these types of projects, or discuss something specific you have in mind, I’d be happy to chat.</p>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;