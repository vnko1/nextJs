import Head from "next/head";
import styles from "./Layout.module.scss";
import utilStyles from "/styles/utils.module.css";
import Link from "next/link";
import ProfileImage from "../ProfileImage/ProfileImage";
import { FC, ReactNode } from "react";
const name = "Andrii";
export const siteTitle = "Next.js Sample Website";

interface ILayout {
  children: ReactNode;
  home?: boolean;
}

const Layout: FC<ILayout> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <ProfileImage
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Link href='/posts/first-post'>POST</Link>
          </>
        ) : (
          <>
            <Link href='/'>
              <ProfileImage
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
