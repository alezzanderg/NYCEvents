import Head from 'next/head';
import Services from '../components/Services';


const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Services - NYC Events Solution</title>
        <meta name="description" content="Learn more about the services we offer at NYC Events Solution." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="services">
        <Services />
      </section>
    </>
  );
};

export default ServicesPage;
