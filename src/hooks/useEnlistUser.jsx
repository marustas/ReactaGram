import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useEnlistUser() {
  const { isLoading: isEnlisting, mutate: enlist } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {toast.success(
      "Account successfully created! Please verify it from your email address."
    ); 
  }
  });

  return { isEnlisting, enlist };
}