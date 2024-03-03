import {useQuery } from "@tanstack/react-query";
import { getPost as getPostApi } from "../services/apiPost";
import { useParams } from 'react-router-dom';

export function usePost(){
    const { id } = useParams();

    const {isLoading: isPostLoading, data: post, error} = useQuery({
        queryKey: ['post', id],
        queryFn:  ()=> getPostApi(id), retry: false
    });

    return {isPostLoading, post, error}
}