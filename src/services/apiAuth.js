import supabase from "./supabase";

export async function signUp({ email, password, username }) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { username: username }

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

export async function getUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data: user, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    if (user) return user.user;
}