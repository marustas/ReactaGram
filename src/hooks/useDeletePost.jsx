import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../services/apiPost";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeletePost(id){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {isLoading: isDeleting, mutate: deletePost} = useMutation({
        mutationFn: ()=> { deletePostApi(id) },
        onSuccess: () => { 
            toast.success('Post successfully deleted.');
            navigate('/'); 
            queryClient.invalidateQueries({queryKey:['recentPosts']})
        },
        onError: () => { toast.error('An error occured when deleting this post.') }
    })

    return {isDeleting, deletePost};
}