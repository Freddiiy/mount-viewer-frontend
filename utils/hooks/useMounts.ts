import useSWR from "swr";
import {IMount} from "../types/Mount.t";
import axios from "axios";
import {useAppSelector} from "../../store/hooks";
import {ICharacter, ICharacterMount} from "../types/Character.t";
import mount from "../../pages/mount";

export function useMounts() {
	const url = `https://tychondi.dk/mount/api/mount`;
	const {data, error} = useSWR<IMount[]>(url, fetcher);

	const search = useAppSelector(state => state.search);

	let filteredData: IMount[] | undefined = [];


	if (search) {
		filteredData = data?.filter((mount) => mount.name.toLowerCase().includes(search.value.toLowerCase()));
	} else {
		filteredData = data;
	}

	const character = useAppSelector(state => state.character);
	const {characterMountsData, characterMountError} = useCharacterMounts();
	if (character) {
		data?.forEach((mount) => mount.isOwned = false);
		characterMountsData?.filter((characterMount) => {
			data?.forEach((mount) => {
				if (mount.id == characterMount.mount.id) mount.isOwned = true;
			})
		})

		if (search.ownedMounts) {
			filteredData = filteredData?.filter((mount) => search.ownedMounts == mount.isOwned)
		}

		return {
			mounts: filteredData,
			isLoading: !error && !data,
			isLoaded: !error && data,
			isError: error,
		}

	}

	return {
		mounts: filteredData,
		isLoading: !error && !data,
		isLoaded: !error && data,
		isError: error,
	}
}

export function useSlicedMounts(begin: number, end: number) {
	const {mounts, isLoading, isError} = useMounts();

	return {
		mounts: mounts?.slice(begin, end),
		isLoading: isLoading,
		isError: isError,
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

function useCharacterMounts() {
	const character = useAppSelector(state => state.character);
	const url = `https://tychondi.dk/mount/api/character/mounts/${character.value?.region}/${character.value?.realm.slug}/${character.value?.name.toLowerCase()}`;
	const {data, error} = useSWR<ICharacterMount[]>(url, fetcher);

	return {
		characterMountsData: data,
		characterMountError: !error
	}
}

export async function fetcher<T>(url: string): Promise<T> {
	const response = await axios.get<T>(url);
	return response.data;
}
