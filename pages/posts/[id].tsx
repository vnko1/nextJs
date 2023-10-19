import Layout from "../../components/Layout/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Date from "../../components/Date/Date";
import { getAllPostIds, getPostData } from "../../lib/posts";

import utilStyles from "/styles/utils.module.css";
import { FC } from "react";

interface IPost {
  postData: { title: string; date: string; contentHtml: string };
}

const Post: FC<IPost> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  };
};

export default Post;
