import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "/components/Layout/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() => {
            console.log(
              `script loaded correctly, window.FB has been populated`
            );
          }}
        />
      </Head>
      <div>
        <h1>First Post</h1>
        <h2>
          <Link href='/'>Back to home</Link>
        </h2>
      </div>
    </Layout>
  );
}
