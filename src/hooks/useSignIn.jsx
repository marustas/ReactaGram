import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignIn() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isLoading: isSigningIn, mutate: signIn } = useMutation({
        mutationFn: ({ email, password }) => signInApi({ email, password }),
        onSuccess: (user) => {
            navigate('/');
            queryClient.setQueryData(['user'], user.user)
        },
        onError: () => { console.log('There was an error logging in') }
    })
    return { isSigningIn, signIn };
}