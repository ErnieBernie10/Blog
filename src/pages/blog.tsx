import React from 'react';

import { GetStaticProps, NextPage } from 'next';

import { getPosts, PostWithTranslations } from '../api/getPosts';
import { NavbarLayout } from '../components/NavbarLayout';
import { PreviewCard } from '../components/PreviewCard';
import { toDisplayDate } from '../util/dateUtil';

const Blog: NextPage<{ posts: PostWithTranslations[] }> = ({ posts }) => (
  <NavbarLayout>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
      {posts?.map((p, i) => {
        return (
          <PreviewCard
            title={p.title}
            description={p.description}
            imgSrc={p.preview_image ?? ''}
            imgAlt={p.title}
            to={`/blog/articles/${p.slug}`}
            date={toDisplayDate(p.created_at ?? '')}
            key={i}
          />
        );
      })}
    </div>
  </NavbarLayout>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts.data,
    },
  };
};
