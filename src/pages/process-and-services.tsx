import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ProcessTimeline from '../components/ProcessTimeline';
import ServiceList from '../components/ServiceList';
import { processSteps, services } from '../data/process';
import styles from '../styles/Home.module.css';

const ProcessPage: NextPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>A Practical, Supportive Approach – Architectural Design</title>
        <meta name="description" content="A Practical, Supportive Approach as an architectural designer — From First Ideas to Final Details" />
      </Head>


      <main className="main-content">
        <div className="page-header">
          <h1>A Practical, Supportive Approach — From First Ideas to Final Details</h1>
          <p>Every project is different — but whether you’re planning a small extension or a full new-build, the journey should feel clear, collaborative, and well-supported.</p>
          <p>With over 30 years of experience — and strong working relationships with local authorities, consultants and trades — I guide clients through the process step by step, making sure things stay on track and stress is kept to a minimum.</p>
          <p>Here’s how I typically work:</p>
        </div>

        <section className="section-container">
          <ProcessTimeline steps={processSteps} />
        </section>

        <section className="section-container">
          <p>No two projects are the same — but my goal is always to keep things clear, grounded, and built around you.</p>
          <p>If you’re at the start of a project, or even just thinking about what’s possible, feel free to get in touch.</p>
        </section>
      </main>
    </div>
  );
};

export default ProcessPage;