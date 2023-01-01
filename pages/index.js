import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ title, city }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>{title}</h2>
        <nav>
          {/* <img src = {}/> */}
          <a href="/">Home</a>
          <a href="/about_us">About</a>
          <a href="/events">Events</a>
        </nav>
      </header>
      <main className={styles.main}>
        {city.map((category) => {
          return (
            <a href={`/events/${category.id}`}>
              <Image src={category.image} width={400} height={300} />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </a>
          );
        })}
      </main>
      <footer>
        <p> copyright - events app</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const data = await import("../data/data.json");

  console.log("I am coming from getServerSideProps function");
  return {
    props: {
      title: "I am coming from server side",
      city: data.events_categories,
    },
  };
}