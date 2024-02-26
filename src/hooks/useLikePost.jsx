import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost as likePostApi } from "../services/apiPost";
import toast from "react-hot-toast";

export function useLikePost() {
    const queryClient = useQueryClient();
    
    const { isLoading: isLiking, mutate: likePost } = useMutation({
        mutationFn:(id, likes)=> {likePostApi(id,likes);},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['recentPosts']})
        },
        onError: (error) => { toast.error(error.message)}
    })
    return { isLiking, likePost };
}