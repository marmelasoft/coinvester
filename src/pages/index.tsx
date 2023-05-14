import { useCallback } from "react";
import Head from "next/head";
import type { ISuccessResult } from "@worldcoin/idkit";
import { IDKitWidget } from "@worldcoin/idkit";

import { Navbar, Banner, Aboutus, Dedicated, Manage, FAQ, Footer, Wework } from "@landing";

const Home = () => {
  	const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	}, []);

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
	};

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

Home.layout = "Blank"

export default Home;
