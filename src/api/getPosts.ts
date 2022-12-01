import { supabase } from './client';
import { Database } from './database.types';

export type Post = Database['public']['Tables']['posts']['Row'];
export const getPosts = async (tags?: string[]) => {
  const select =
    'slug, title, created_at, updated_at, preview_image, description, tags';
  if (tags && tags.length > 0) {
    return supabase.from('posts').select(select).contains('tags', tags);
  }
  return supabase.from('posts').select(select);
};

export const getPostForSlug = async (slug: string) => {
  return supabase.from('posts').select('*').eq('slug', slug).single();
};
