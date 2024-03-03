import {useQuery } from "@tanstack/react-query";
import { getPost as getPostApi } from "../services/apiPost";

export function usePost(postID){
    return useQuery({
        queryKey: ['post', postID],
        queryFn: ()=>{ getPostApi(postID) }
    })
    
}