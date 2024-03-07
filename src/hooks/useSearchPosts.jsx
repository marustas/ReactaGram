import {useQuery } from "@tanstack/react-query";
import { getSearchedPosts } from "../services/apiPost";

export function useSearchPosts(searchQuery){
    const {data: searchedPosts, isFetching: isSearching} = useQuery({
        queryFn: () => getSearchedPosts(searchQuery), retry: false,
        queryKey: ['searched-posts', searchQuery],
    })
    return {searchedPosts, isSearching}
}