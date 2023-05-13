import Head from "next/head";

import { Navbar, Banner, Aboutus, Digital, Dedicated, Manage, FAQ, Footer, Wework } from "@landing";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home • coinvest</title>
        <meta name="description" content="Democratizing access to investment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <Aboutus />
        <Dedicated />
        <Wework />
        <Manage />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;
