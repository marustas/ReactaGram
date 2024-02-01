import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignIn() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isLoading: isSigningIn, mutate: signIn } = useMutation({
        mutationFn: ({ email, password }) => signInApi({ email, password }),
        onSuccess: (user) => {
            navigate('/');
            queryClient.setQueryData(['user'], user.user);
            console.log(user.user);
        },
        onError: () => { toast.error('There was an error logging in. Please try again.')}
    })
    return { isSigningIn, signIn };
}