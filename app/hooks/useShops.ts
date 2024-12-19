import { API_URL } from "@/constants/url";
import useSWR from "swr";

async function fetcher(key: string) {
    return fetch(key).then((res) => res.json());
}

export const useShops = ()=> {
    const {data, isLoading, error, mutate} = useSWR(`${API_URL}/allShops`,fetcher);
    return {
        shops: data,
        isLoading,
        error,
        mutate,
    };
};