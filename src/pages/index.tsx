import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Architect Pembrokeshire & Wales | Planning Permission | Wales Design</title>
        <meta name="description" content="Expert architect in Pembrokeshire and Wales, specializing in extensions, renovations, and planning permission. Contact Wales Design for a consultation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wales Design",
              "image": "https://www.yourwebsite.com/wales-architect.jpg",
              "@id": "",
              "url": "https://www.yourwebsite.com",
              "telephone": "Your Phone Number",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Pembrokeshire",
                "addressRegion": "Wales",
                "postalCode": "Your Postal Code",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.0,
                "longitude": 0.0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
