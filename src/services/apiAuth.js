import supabase from "./supabase";

export async function signUp({ email, password, name }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })
    if (error) throw new Error(error.message);
    return data;
}