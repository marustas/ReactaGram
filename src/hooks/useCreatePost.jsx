import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "../services/apiPost";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreatePost() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { isLoading: isPosting, mutate: createPost } = useMutation({
        mutationFn: createPostApi,
        onSuccess: (post) => {
            navigate('/');
            queryClient.setQueryData(['post'], post);
        },
        onError: () => { toast.error('There was an error creating this post. Please try again.')}
    })
    return { isPosting, createPost };
}