import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePost as savePostApi } from "../services/apiPost";
import toast from "react-hot-toast";

export function useSavePost() {
    const queryClient = useQueryClient();
    
    const { isLoading: isSaving, mutate: savePost } = useMutation({
        mutationFn:(id, saved)=> {savePostApi(id,saved);},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['recentPosts']})
        },
        onError: (error) => { toast.error(error.message)}
    })
    return { isSaving, savePost };
}