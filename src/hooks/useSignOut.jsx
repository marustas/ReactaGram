import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignOut() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isLoading: isSigningOut, mutate: signOut } = useMutation({
        mutationFn: signOutApi,
        onSuccess: () => {
            queryClient.removeQueries(['currentUser']);
            navigate('/sign-up', {replace: true});
        },
        onError: () => { toast.error('There was an error logging out. Please try again.')}
    })
    return { isSigningOut, signOut };
}