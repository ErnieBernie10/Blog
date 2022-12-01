import React from 'react';

import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { getPostForSlug, getPosts, Post } from '../../../api/getPosts';
import { NavbarLayout } from '../../../components/NavbarLayout';
import { StyledReactMarkdown } from '../../../components/StyledReactMarkdown';

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <>Loading...</>;
  }
  return (
    <NavbarLayout>
      <article className="container sm:lg:md:xl:mx-auto lg:w-8/12 xl:w-7/12 md:w-full p-2">
        <h1 className="text-5xl text-red-900 dark:text-red-200">
          {post.title}
        </h1>
        {post.content && (
          <StyledReactMarkdown>{post.content}</StyledReactMarkdown>
        )}
      </article>
    </NavbarLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: post } = await getPostForSlug(params?.slug as string);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: allPosts } = await getPosts();
  return {
    paths: allPosts?.map((post) => `/blog/articles/${post.slug}`) || [],
    fallback: true,
  };
};

export default PostPage;
