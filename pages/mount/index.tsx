import {NextPage} from "next";
import GridComponent from "../../components/GrindSection/MountComponet";
import React, {ReactNode, useEffect, useState} from "react";
import {IMount} from "../../utils/types/Mount.t";
import CharacterGetter from "../../components/CharacterGetter/CharacterGetter";
import Link from "next/link";
import {useAppSelector} from "../../store/hooks";
import {characterSlice} from "../../components/Character/CharacterSlice";
import {Box, SimpleGrid, Spinner} from "@chakra-ui/react";
import MountComponent from "../../components/GrindSection/MountComponet";
import {useMounts} from "../../components/Mount/useMounts";
import Mount from "./index";
import MountModal from "../../components/Mount/MountModal";
import Header from "../../components/Header/Header";
import Background from "../../components/Layout/Background";

const Index: NextPage = () => {
	const character = useAppSelector(state => state.character)
	const search = useAppSelector(state => state.search);
	const {mounts, isError, isLoading} = useMounts();

	if (isLoading) return <Spinner/>
	if (isError) return <h1>No mounts found</h1>
	return (
		<>
			<Header/>
			<h1>{search.value}</h1>
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