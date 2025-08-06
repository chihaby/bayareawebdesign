"use client";
import { useState } from "react";
import Head from "next/head";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { loadData } from "./api/post";
import Post from "../../components/Post";
import styles from "../../styles/Blog.module.css";

const LOAD_MORE_STEPS = 3;

function Blog({ initialPosts, total }) {
  <Head>
    <link rel="canonical" href="https://bayareawebdesign.net/blog" />
  </Head>;
  const [posts, setPosts] = useState(initialPosts);
  // const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEPS);
  const [loading, setLoading] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEPS}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEPS);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <hr />
        <Row>
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </Row>
        {/* <button onClick={getMorePosts}>Load more posts</button> */}
      </div>
      <hr />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEPS);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}

export default Blog;
