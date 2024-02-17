import supabase from "./supabase";

export async function createPost(post) {
    // change tby adding postImage to the props and the creating the name and link to the image in the bucket inside rthis function
    // then updatae the passed post and insert the updated post into the table
    const { data } = await supabase.from('posts').insert([{...post }]).select();
    return data;
}

export async function createPostImage(postImage, postName) {
    const postImageName = `post-${postName}-${Math.random()}`;
    const { data, error } = await supabase.storage.from('media').upload(postImageName, postImage);
    return `https://tlowlhfarkbljagxmihv.supabase.co/storage/v1/object/public/media/${postImageName}`;
}