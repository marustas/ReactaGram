import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/apiAuth";

export function useSignUp() {
  const { isLoading: isSigningUp, mutate: signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
        console.log('Account was successfully created.');
    },
    onError: ()=>{console.log('There was an error creating the account');}
  });

  return { isSigningUp, signUp };
}