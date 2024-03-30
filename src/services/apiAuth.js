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

    if (error) throw new Error(error.message);
    return user;
}

export async function getAllUsers() {
    const { data: users, error } = await supabase.from('profiles').select('*');

    if (error) throw new Error(error.message);
    return users;
}

export async function createUser(user) {
    const { username, name, id } = user;
    const { data: enlistedUser } = await supabase.from('profiles').select('*').eq('id', id).single();

    if (!enlistedUser) {
        const { data, error } = await supabase.from('profiles').insert([{ 'username': username, 'name': name, 'profileImage': '', 'bio': '' }]).select();
        if (error) throw new Error(error.message);
        return data;
    }

    return enlistedUser;
}

export async function updateUser(user) {
    if (user.profileImageFile) {
        const profileImageName = `profile-${user.username}-${Math.random()}`;
        const { error } = await supabase.storage.from('profile-images').upload(profileImageName, user.profileImageFile);
        user.profileImage = `${supabaseUrl}/storage/v1/object/public/profile-images/${profileImageName}`;
        if (error) throw new Error("No profile image to upload");
    }
    const { data: oldUser } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    const { profileImageFile, ...updatedUser } = user;

    updatedUser.username = updatedUser.username !== '' ? updatedUser.username : oldUser.username;
    updatedUser.name = updatedUser.name !== '' ? updatedUser.name : oldUser.name;
    updatedUser.bio = updatedUser.bio !== '' ? updatedUser.bio : oldUser.bio;
    updatedUser.profileImage = updatedUser.profileImage !== '' ? updatedUser.profileImage : oldUser.profileImage;

    const { data: recentPosts } = await supabase.from('posts').update({ 'creatorUrl': updatedUser.profileImage }).eq('creatorID', user.id);


    const { data, error } = await supabase.from('profiles').update({...updatedUser }).eq('id', user.id).select();

    if (error) throw new Error('This post could not be updated. Please try again.');

    return data;
}