import { supabase } from "./client"
import { constants } from "./models/constants";
import { Post } from "./models/models";

interface GetPostsData {
  slug: string;
  title: string;
  created_at: string;
  updated_at: string;
}
export const getPosts = async () => {
  return await supabase.from<GetPostsData>(constants.POSTS).select("slug, title, created_at, updated_at");
}

export const getPostForSlug = async (slug: string) => {
  return await supabase.from<Post>(constants.POSTS).select("*").eq("slug", slug).single();
}