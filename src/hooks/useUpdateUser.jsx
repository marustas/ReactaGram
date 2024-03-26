import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateUser(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {isLoading: isUpdatingUser, mutate: updateUser} = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => { navigate('/'); queryClient.invalidateQueries({queryKey: ['currentUser']}); queryClient.invalidateQueries({queryKey: ['user']})},
        onError: (error) => {toast.error(error.message)}
    })
    return {isUpdatingUser, updateUser};
}