import supabase from "./supabase";

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
    const { error } = await supabase.auth.signOut()

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
    const { data, error } = await supabase.from('profiles').insert([{...user }]).select();
    if (error) throw new Error(error.message)
    return data;
}