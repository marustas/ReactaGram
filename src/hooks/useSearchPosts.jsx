import {useQuery } from "@tanstack/react-query";
import { getSearchedPosts } from "../services/apiPost";

export function useSearchPosts(searchQuery){
    const {data: searchedPosts, isLoading: isSearching} = useQuery({
        queryFn: ()=>getSearchedPosts(searchQuery),
        queryKey: ['searched-posts']
    })

    return {searchedPosts, isSearching}
}