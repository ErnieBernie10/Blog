import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { getPostForSlug, getPosts } from "../../api/getPosts";
import { Post } from "../../api/models/models";

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
	const router = useRouter();
	if (router.isFallback) {
		return <>Loading...</>
	}
	return (
		<article>
			<h2>{post.title}</h2>
			{post.content && <ReactMarkdown>{post.content}</ReactMarkdown>}
		</article>
	);
}

export const getStaticProps: GetStaticProps = async ({ params, preview = null }) => {
	const { data: post } = await getPostForSlug(params?.slug as string);
  return {
    props: {
			post
    },
  }
}

export const getStaticPaths = async () => {
	const { data: allPosts } = await getPosts();
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}

export default PostPage;