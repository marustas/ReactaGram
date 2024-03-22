import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiAuth";

export function useAnyUser(id){
    const { isLoading, data: user } = useQuery({ queryKey: ['user', id], queryFn: ()=>getUser(id)});
    return { isLoading, user };
}