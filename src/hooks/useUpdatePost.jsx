import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost as updatePostApi } from "../services/apiPost";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdatePost(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {isLoading: isUpdating, mutate: updatePost} = useMutation({
        mutationFn: updatePostApi,
        onSuccess: () => { navigate('/'); queryClient.invalidateQueries({queryKey: ['recentPosts']})},
        onError: (error) => {toast.error(error.message)}
    })
    return {isUpdating, updatePost};
}

