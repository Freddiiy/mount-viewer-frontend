import useSWR from "swr";
import {IMount} from "../../utils/types/Mount.t";
import axios from "axios";
import {useDebouncedValue} from "@mantine/hooks";
import {useAppSelector} from "../../store/hooks";

export function useMounts() {
	const url = `https://tychondi.dk/mount/api/mount`;
	const {data, error} = useSWR<IMount[]>(url, fetcher);

	return {
		mounts: data,
		isLoading: !error && !data,
		isLoaded: !error && data,
		isError: error,
	}
}

export function useSlicedMounts(begin: number, end: number) {
	const url = `https://tychondi.dk/mount/api/mount`;
	const {data, error} = useSWR<IMount[]>(url, fetcher);

	const search = useAppSelector(state => state.search);
	const [debounced] = useDebouncedValue(search, 5000);

	let filteredData: IMount[] | undefined = [];
	if (search) {
		filteredData = data?.filter((mount) => mount.name.toLowerCase().includes(search.value.toLowerCase()));
	} else {
		filteredData = data;
	}

	return {
		mounts: filteredData?.slice(begin, end),
		isLoading: !error && !data,
		isLoaded: !error && data,
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
