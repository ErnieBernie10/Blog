import { PostgrestResponse } from '@supabase/supabase-js';

import { supabase } from './client';
import { Database } from './database.types';

export type Post = Database['public']['Tables']['posts']['Row'];
export type LocalizedPost = Database['public']['Tables']['posts_nl']['Row'];
export type PostWithTranslations = Post & {
  nl: LocalizedPost;
};

export const getPosts = async (tags: string[] = []) =>
  supabase
    .from('posts')
    .select(
      `
    slug, 
    title, 
    created_at, 
    updated_at, 
    preview_image, 
    description, 
    tags,
    nl:posts_nl (*)`
    )
    // TODO: Figure out what the hell is going on here once there is more documentation on Supabase nested tables in Typscript
    .contains('tags', tags)
    .order('created_at', { ascending: false }) as unknown as Promise<
    PostgrestResponse<PostWithTranslations>
  >;

export const getPostForSlug = async (slug: string) => {
  return supabase.from('posts').select('*').eq('slug', slug).single();
};
