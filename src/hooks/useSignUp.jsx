import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/apiAuth";

export function useSignUp() {
  const { isLoading: isSigningUp, mutate: signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
        console.log('Account successfully created.');
    },
  });

  return { isSigningUp, signUp };
}