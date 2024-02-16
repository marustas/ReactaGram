import supabase from "./supabase";

export async function createPost(post) {
    const { data, error } = await supabase.from('posts').insert([{...post }]).select();
    return data;
}