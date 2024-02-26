import supabase, { supabaseUrl } from "./supabase";

export async function createPost(postData) {
    if (postData.postImage) {
        const postImageName = `post-${postData.username}-${Math.random()}`;
        const { error } = await supabase.storage.from('media').upload(postImageName, postData.postImage);
        postData.mediaUrl = `${supabaseUrl}/storage/v1/object/public/media/${postImageName}`;
        if (error) throw new Error("No image to upload");
    }
    const { postImage, ...post } = postData;
    const { data, error } = await supabase.from('posts').insert([{...post }]).select();

    if (error) throw new Error(error.message);
    return data;
}

export async function getRecentPosts() {

    const { data: recentPosts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return recentPosts;

}

export async function likePost(id, currentLikes) {
    const { data, error } = await supabase.from('posts').update({ 'likes': currentLikes }).eq('id', id).select()
    if (error) throw new Error('There was an error liking this post. Please try again');

    return data;
}

export async function savePost(id, saved) {
    const { data, error } = await supabase.from('posts').update({ 'saved': saved }).eq('id', id).select()
    if (error) throw new Error('There was an error saving this post. Please try again');

    return data;
}