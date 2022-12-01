export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: number;
          title: string;
          created_at: string | null;
          updated_at: string | null;
          content: string;
          status: Database['public']['Enums']['status'];
          author_id: string;
          tags: string[] | null;
          slug: string;
          description: string;
          preview_image: string | null;
        };
        Insert: {
          id?: number;
          title: string;
          created_at?: string | null;
          updated_at?: string | null;
          content: string;
          status?: Database['public']['Enums']['status'];
          author_id: string;
          tags?: string[] | null;
          slug: string;
          description: string;
          preview_image?: string | null;
        };
        Update: {
          id?: number;
          title?: string;
          created_at?: string | null;
          updated_at?: string | null;
          content?: string;
          status?: Database['public']['Enums']['status'];
          author_id?: string;
          tags?: string[] | null;
          slug?: string;
          description?: string;
          preview_image?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      status: 'draft' | 'published' | 'removed';
    };
  };
}
