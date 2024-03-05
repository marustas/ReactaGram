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

export async function likePost(postData) {
    const { data, error } = await supabase.from('posts').update({ 'likes': postData.likes }).eq('id', postData.id).select();
    if (error) throw new Error('There was an error liking this post. Please try again');

    return data;
}

export async function savePost(postData) {
    const { data, error } = await supabase.from('posts').update({ 'saved': postData.saved }).eq('id', postData.id).select()
    if (error) throw new Error('There was an error saving this post. Please try again');

    return data;
}

export async function updatePost(updatedPost) {
    console.log(updatedPost);
    const { newPostData } = updatedPost;
    if (newPostData.postImage) {
        const postImageName = `post-${newPostData.username}-${Math.random()}`;
        const { error } = await supabase.storage.from('media').upload(postImageName, newPostData.postImage);
        newPostData.mediaUrl = `${supabaseUrl}/storage/v1/object/public/media/${postImageName}`;
        if (error) throw new Error("No image to upload");
    }

    if (!newPostData.caption && !newPostData.location && !newPostData.tags) return;

    const { postImage, ...newPost } = newPostData;
    const { data, error } = await supabase.from('posts').update({...newPost }).eq('id', updatedPost.id).select();

    if (error) throw new Error('This post could not be updated. Please try again.');

    return data;
}

export async function getPost(id) {
    const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();

    if (error) { throw new Error('There was an error loading this Post data') };

    return data;
}

export async function getSearchedPosts(searchQuery) {
    const { data, error } = await supabase.from('posts').select('*').eq('caption', searchQuery);

    if (error) throw new Error('No posts with such caption.');

    return data;
}

export async function deletePost(id) {
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) throw new Error('This post could not be deleted');
}