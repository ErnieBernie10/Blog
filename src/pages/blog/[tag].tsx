import React from 'react';

import { GetStaticProps, NextPage } from 'next';

import { getPosts } from '../../api/getPosts';
import { definitions } from '../../api/models/supabase';
import { NavbarLayout } from '../../components/NavbarLayout';
import { PreviewCard } from '../../components/PreviewCard';
import { toDisplayDate } from '../../util/dateUtil';

const Tag: NextPage<{ posts?: Array<definitions['posts']> }> = ({ posts }) => {
  return (
    <NavbarLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
        {posts?.map((p, i) => (
          <PreviewCard
            title={p.title}
            description={p.description}
            imgSrc={p.preview_image ?? ''}
            imgAlt={p.title}
            to={`/blog/articles/${p.slug}`}
            date={toDisplayDate(p.created_at ?? '')}
            key={i}
          />
        ))}
      </div>
    </NavbarLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts([params?.tag as string]);
  return {
    props: {
      posts: posts.data,
    },
  };
};

export const getStaticPaths = async () => {
  // TODO: Get this from supabase
  const tags = ['erasmus', 'general', 'development'];
  return {
    paths: tags.map((tag) => `/blog/${tag}`) || [],
    fallback: true,
  };
};

export default Tag;
