import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FormComponent from '../components/FormComponent'; // Import your FormComponent

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my the valorant shop checker!" />
        <p className="description">
          To check your shop in the 2 text boxes and the images of your shop will pop up and show images of what your shop is. <code>pages/index.js</code>
        </p>

        {/* Add your FormComponent here */}
        <FormComponent />
      </main>

      <Footer />
    </div>
  );
}
