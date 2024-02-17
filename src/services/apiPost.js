import supabase from "./supabase";

export async function createPost(post) {
    const { data } = await supabase.from('posts').insert([{...post }]).select();
    return data;
}

export async function createPostMedia(postMedia, postName) {
    const { data, error } = await supabase.storage.from('media').upload(postName, postMedia);
    return `tlowlhfarkbljagxmihv.supabase.co/storage/v1/object/public/media/${postName}`;
}