import supabase from "./supabase";

export async function createPost(post) {
    const { data } = await supabase.from('posts').insert([{...post }]).select();
    return data;
}

export async function createPostImage(postImage, postName) {
    const postImageName = `post-${postName}-${Math.random()}`;
    const { data, error } = await supabase.storage.from('media').upload(postImageName, postImage);
    return `https://tlowlhfarkbljagxmihv.supabase.co/storage/v1/object/public/media/${postImageName}`;
}