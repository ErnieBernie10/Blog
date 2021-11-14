import type { GetStaticProps, NextPage } from 'next';

import { getPosts } from '../api/getPosts';
import { definitions } from '../api/models/supabase';
import { PreviewCard } from '../components/PreviewCard';

const Home: NextPage<{ posts: Array<definitions['posts']> }> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
    {posts.map((p, i) => (
      <PreviewCard
        title={p.title}
        description={p.description}
        imgSrc={p.preview_image ?? ''}
        imgAlt={p.title}
        to={`/blog/${p.slug}`}
        key={i}
      />
    ))}
  </div>
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
