import { supabase } from './client';
import { constants } from './models/constants';
import { Post } from './models/models';

interface GetPostsData {
  slug: string;
  title: string;
  created_at: string;
  updated_at: string;
}
export const getPosts = async () => {
  return supabase
    .from<GetPostsData>(constants.POSTS)
    .select('slug, title, created_at, updated_at, preview_image, description');
};

export const getPostForSlug = async (slug: string) => {
  return supabase
    .from<Post>(constants.POSTS)
    .select('*')
    .eq('slug', slug)
    .single();
};
