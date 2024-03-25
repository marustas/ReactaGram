import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/apiAuth";

export function useEnlistUser() {
  const { isLoading: isEnlisting, mutate: enlist } = useMutation({
    mutationFn: createUser
  });

  return { isEnlisting, enlist };
}