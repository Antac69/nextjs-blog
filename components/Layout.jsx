import styles from "@/styles/Layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "antac69";

const Layout = ({ children, title, description, home }) => {
  const forTitle = `${title} | next app`;
  return (
    <div className={styles.container}>
      <Head>
        <title>{forTitle}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
        <nav>
          <Link href="/">
            Inicio | 
          </Link>
          <Link href="/about">
            About | 
          </Link>
          <Link href="/blog">
            Blog | 
          </Link>
          <Link href="/about/post">
            Post
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};

Layout.defaultProps = {
  title: "primera pagina |app next",
  description: "pagina con next",
};

export default Layout;
