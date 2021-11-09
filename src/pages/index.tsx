import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getPosts } from "../api/getPosts";
import { definitions } from "../api/models/supabase";

const Home: NextPage<{ posts: Array<definitions["posts"]> }> = ({ posts }) => (
  <main>
    {posts.map((p, i) => (
      <div key={i}>
        <h3>{p.title}</h3>
        <Link href={`/blog/${p.slug}`}>Read more</Link>
      </div>
    ))}
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts.data,
    },
  };
};

export default Home;
