import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Home.module.css';

const ContactPage: NextPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Contact Me - Architect</title>
        <meta name="description" content="Get in touch with me for inquiries and collaborations." />
      </Head>

      <Header />

      <main className="main-content">
        <div className="page-header">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you. Whether you have a question about my work, a proposal for a new project, or just want to say hello, please don't hesitate to reach out.</p>
        </div>
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;