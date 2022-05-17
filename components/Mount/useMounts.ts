import useSWR from "swr";
import {IMount} from "../../utils/types/Mount.t";
import axios from "axios";

export function useMounts() {
	const url = `https://tychondi.dk/mount/api/mount`;
	const {data, error} = useSWR<IMount[]>(url, fetcher);

	return {
		mounts: data,
		isLoading: !error && !data,
		isError: error,
	}
}

export function useMount(id: number) {
	const url = `https://tychondi.dk/mount/api/mount/${id}`
	const {data, error} = useSWR<IMount>(url, fetcher)

	return {
		mount: data,
		isLoading: !error && !data,
		isError: error,
	}
}

async function fetcher<T>(url: string): Promise<T> {
	const response = await axios.get<T>(url);
	return response.data;
}
