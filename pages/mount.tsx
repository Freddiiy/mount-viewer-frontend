import {NextPage} from "next";
import GridComponent from "../components/GrindSection/MountComponet";
import React, {ReactNode, useEffect, useState} from "react";
import {IMount} from "../utils/types/Mount.t";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import Link from "next/link";
import {useAppSelector} from "../store/hooks";
import {characterSlice} from "../components/Character/CharacterSlice";
import {Box, Grid, Text, chakra, GridItem, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import MountComponent from "../components/GrindSection/MountComponet";
import {AnimatePresence, motion} from "framer-motion";

const Mount: NextPage = () => {

	const [mounts, setMounts] = useState<IMount[]>([]);

	useEffect(() => {
		async function fetchMounts() {
			const response = await axios.get<IMount[]>("https://tychondi.dk/mount/api/mount")
			const data = await response.data;
			setMounts(data);
		}

		fetchMounts();
	}, [])

	const character = useAppSelector(state => state.character)

	function Header() {
		return (
			<div className={character.value?.faction.type == "ALLIANCE" ? "navBar2" : "navBar" } >
				<ul>
					<li className={character.value?.faction.type == "ALLIANCE" ? "dropdown2" : "dropdown" }>
						<a href="javascript:void(0)" className={character.value?.faction.type == "ALLIANCE" ? "dropbtn2" : "dropbtn" }>{character.value?.name}<img  src={character.value?.assets.at(0).value}/></a>
						<img src="" alt=""/>
						<div className={character.value?.faction.type == "ALLIANCE" ? "dropdown2-content" : "dropdown-content" }>
							<a href="#" className={character.value?.faction.type == "ALLIANCE" ? "link" : "link2" }>realm</a>
							<a href="#" className={character.value?.faction.type == "ALLIANCE" ? "link" : "link2" }>region</a>
							<Link href="/" passHref>
								<a href="#" className={character.value?.faction.type == "ALLIANCE" ? "link" : "link2" }>logout</a>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		)
	}

	function Background({children}: { children: ReactNode }) {
		return (
			<Box
				px={8}
				py={24}
				mx={"auto"}
				backgroundImage={character.value?.faction.type == "HORDE" ? "url(/horde-bg.png)" : "url(/allience-bg.png)"}
				backgroundAttachment={"fixed"}
				bgPos={"center"}
				bgSize={"cover"}
				overflow={"hidden"}>
				{children}
			</Box>
		)
	}

	return (
		<>
			<Header/>
			<Background>
				<SimpleGrid columns={{base: 2, sm: 2, md: 4, lg: 6}} spacing={20}>
					{mounts.map((mount, key) => (
						<MountComponent key={key} mount={mount}/>
					))}
				</SimpleGrid>
			</Background>
		</>
	)
}

export default Mount