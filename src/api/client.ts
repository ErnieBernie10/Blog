import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://iqveqvwtufaxxiuemjdg.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseKey) {
    throw new Error("Supabase key missing: Add supabase key in environment with key SUPABASE_KEY");
}
export const supabase = createClient(supabaseUrl, supabaseKey)
