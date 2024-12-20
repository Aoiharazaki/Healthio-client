import { API_URL } from "@/src/constants/url";
import useSWR from "swr";

async function fetcher(key: string) {
    return fetch(key).then((res) => res.json());
}

export const useShop = (id: string) => {
    const { data, error, isLoading, mutate } = useSWR(`${API_URL}/shop/${id}`, fetcher);

    return {
        shop: data,
        isLoading,
        error,
        mutate,
    };
};
