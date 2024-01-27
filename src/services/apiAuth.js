import supabase from "./supabase";

export async function signUp({ email, password, name }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        name
    })
    if (error) throw new Error(error.message);
    return data;
}

export async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        // console.log(data);

    if (error) throw new Error(error.message);

    return data;
}