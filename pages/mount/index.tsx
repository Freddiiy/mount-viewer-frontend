import {NextPage} from "next";
import React, {ReactNode, useEffect, useState} from "react";
import {IMount} from "../../utils/types/Mount.t";
import {Box, Button, SimpleGrid, Spinner} from "@chakra-ui/react";
import MountComponent from "../../components/GrindSection/MountComponet";
import {fetcher, useMount, useMounts, useSlicedMounts} from "../../utils/hooks/useMounts";
import MountModal from "../../components/Mount/MountModal";
import Header from "../../components/Header/Header";
import Background from "../../components/Layout/Background";

const Index: NextPage = () => {
	const [startCounter, setStartCounter] = useState(0);
	const [endCounter, setEndCounter] = useState(40);

	const {mounts, isLoading, isError} = useMounts();

	const perPage = 3;
	const [lastObjectPos, setLastObjectPos] = useState(0);
	const [loadedMounts, setLoadedMounts] = useState<IMount[]>();

	if (isLoading) return <Spinner/>
	if (isError) return <h1>No mounts found</h1>

	return (
		<>
			<Header/>
			<Background>
				<SimpleGrid columns={{base: 2, sm: 2, md: 3, lg: 4, xl: 5}} spacing={20}>
					{mounts?.map((mount, key) => (
						<MountComponent key={key} mount={mount}/>
					))}
				</SimpleGrid>
				<MountModal/>
			</Background>
		</>
	)
}

export default Index