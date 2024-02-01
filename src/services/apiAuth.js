import supabase from "./supabase";

export async function signUp({ email, password, username }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: username
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