import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import AboutUs from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


const Home: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>NYC Events Solution</title>
        <meta name="description" content="Your premier event planning service in New York City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <Header />

      <main className="container mx-auto px-6 py-12">
        <section id="services">
          <Services />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      
    </div>
  );
};

export default Home;
