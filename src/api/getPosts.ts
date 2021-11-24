import { supabase } from './client';
import { constants } from './models/constants';
import { Post } from './models/models';

interface GetPostsData {
  slug: string;
  title: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}
export const getPosts = async (tags?: string[]) => {
  const select =
    'slug, title, created_at, updated_at, preview_image, description, tags';
  if (tags && tags.length > 0) {
    return supabase
      .from<GetPostsData>(constants.POSTS)
      .select(select)
      .contains('tags', tags);
  }
  return supabase.from<GetPostsData>(constants.POSTS).select(select);
};

export const getPostForSlug = async (slug: string) => {
  return supabase
    .from<Post>(constants.POSTS)
    .select('*')
    .eq('slug', slug)
    .single();
};
