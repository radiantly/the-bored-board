import Head from "next/head";
import styles from "../styles/Home.module.css";
import TiledBg from "../components/TiledBg.js";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The Bored Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TiledBg />
    </div>
  );
}
