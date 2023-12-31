import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Link from "next/link";
import Date from "../components/Date/Date";
import utilStyles from "../styles/utils.module.css";
import { FC } from "react";

type Home = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};
const Home: FC<Home> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like
          this on
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
          .)
        </p>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
