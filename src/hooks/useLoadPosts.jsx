import {useQuery } from "@tanstack/react-query";
import { getRecentPosts } from "../services/apiPost";

export function useLoadPosts(){
    const {isLoading: isPostLoading, data: posts, error} = useQuery({
        queryKey: ['recentPosts'],
        queryFn: getRecentPosts,
    })

    if(error) throw new Error('There was an error loading the recent posts');

    return {isPostLoading, posts};
}