import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ email, password, username, name }) {

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { username: username, name: name }

        }
    })

    if (error) throw new Error(error.message);

    return data;
}

export async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) throw new Error(error.message);

    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    if (data) return data.user;
}

export async function getUser(id) {
    const { data: user, error } = await supabase.from('profiles').select('*').eq('id', id).single();
    console.log(user)
    if (error) throw new Error(error.message);
    return user;
}

export async function getAllUsers() {
    const { data: users, error } = await supabase.from('profiles').select('*');

    if (error) throw new Error(error.message);
    return users;
}

export async function createUser(user) {
    const { username, name } = user;
    const { data, error } = await supabase.from('profiles').insert([{ 'username': username, 'name': name, 'profileImage': '' }]).select();
    if (error) throw new Error(error.message)
    return data;
}

export async function updateUser(user) {
    const { profileImage } = user;
    if (profileImage.postImage) {
        const postImageName = `post-${profileImage.username}-${Math.random()}`;
        const { error } = await supabase.storage.from('media').upload(postImageName, profileImage.postImage);
        profileImage.mediaUrl = `${supabaseUrl}/storage/v1/object/public/profile-images/${postImageName}`;
        if (error) throw new Error("No profile image to upload");
    }

    if (!profileImage.caption && !profileImage.location && !profileImage.tags) return;

    const { postImage, ...newPost } = profileImage;
    const { data, error } = await supabase.from('profiles').update({...newPost }).eq('id', user.id).select();

    if (error) throw new Error('This post could not be updated. Please try again.');

    return data;
}