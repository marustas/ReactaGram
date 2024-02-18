import supabase from "./supabase";

export async function createPost(postData) {
    if (postData.postImage) {
        const postImageName = `post-${postData.username}-${Math.random()}`;
        const { error } = await supabase.storage.from('media').upload(postImageName, postData.postImage);
        postData.mediaUrl = `https://tlowlhfarkbljagxmihv.supabase.co/storage/v1/object/public/media/${postImageName}`;
        if (error) throw new Error("No image to upload");

    }
    const { postImage, ...post } = postData;
    const { data } = await supabase.from('posts').insert([{...post }]).select();
    return data;
}