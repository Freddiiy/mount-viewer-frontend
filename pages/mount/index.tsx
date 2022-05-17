import {NextPage} from "next";
import GridComponent from "../../components/GrindSection/MountComponet";
import React, {ReactNode, useEffect, useState} from "react";
import {IMount} from "../../utils/types/Mount.t";
import CharacterGetter from "../../components/CharacterGetter/CharacterGetter";
import Link from "next/link";
import {useAppSelector} from "../../store/hooks";
import {SimpleGrid, Spinner} from "@chakra-ui/react";
import MountComponent from "../../components/GrindSection/MountComponet";
import {useMounts, useSlicedMounts} from "../../components/Mount/useMounts";
import Mount from "./index";
import MountModal from "../../components/Mount/MountModal";
import Header from "../../components/Header/Header";
import Background from "../../components/Layout/Background";
import {useDebouncedValue} from "@mantine/hooks";
import {uglifyJsMinify} from "terser-webpack-plugin";

const Index: NextPage = () => {
	const character = useAppSelector(state => state.character)
	const search = useAppSelector(state => state.search);
	const {mounts, isError, isLoading} = useSlicedMounts(0, 40);
	const [_mounts, setMounts] = useState<IMount[]>();
	const [debounced] = useDebouncedValue(search.value, 200);

	const perPage = 3;
	const [lastObjectPos, setLastObjectPos] = useState(0);
	const [loadedMounts, setLoadedMounts] = useState<IMount[]>();

	if (isLoading) return <Spinner/>
	if (isError) return <h1>No mounts found</h1>

	return (
		<>
			<Header/>
			<Background>
				<h1>{debounced}</h1>
				<SimpleGrid columns={{base: 2, sm: 2, md: 3, lg: 4, xl: 5}} spacing={20}>
					{mounts?.map((mount, key,) => (
						<MountComponent key={key} mount={mount}/>
					))}
				</SimpleGrid>
				<MountModal/>
			</Background>
		</>
	)
}

export default Index