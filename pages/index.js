import Head from "next/head";
import styles from "../styles/Home.module.css";
import TiledBg from "../components/TiledBg.js";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bored Board</title>
        <meta
          name="description"
          content="The place you come to when you're feeling bored"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TiledBg />
      <div className={styles.overlay}>
        <div className={styles.title}>The Bored Board</div>
        <div className={styles.subtitle}>
          A wall of interesting sites to visit when you're bored.
        </div>
      </div>
    </div>
  );
}
