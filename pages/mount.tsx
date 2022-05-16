import {NextPage} from "next";
import GridComponent from "../components/GrindSection/MountComponet";
import React, {useEffect, useState} from "react";
import {IMount} from "../utils/types/Mount.t";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import Link from "next/link";
import {useAppSelector} from "../store/hooks";
import {characterSlice} from "../components/Character/CharacterSlice";
import {Box, Grid, Text, chakra} from "@chakra-ui/react";
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
			<div className="navBar">
				<ul>
					<li className="dropdown">
						<a href="javascript:void(0)">name</a>
						<img src="" alt=""/>
						<div className="dropdown-content">
							<a href="#" className="link2"><p className="cName">character name</p></a>
							<a href="#" className="link2">realm</a>
							<a href="#" className="link2">region</a>
							<Link href="/" passHref>
								<a href="#" className="link2">logout</a>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		)
	}

	function BackgroundImg() {
		return (
			<Box
				px={8}
				py={24}
				mx={"auto"}
				w={"full"}
				h={"100vh"}
				backgroundImage={character.value?.faction.type == "HORDE" ? "url(/horde-bg.png)" : "url(/allience-bg.png)"}
				backgroundAttachment={"fixed"}
				bgPos={"center"}
				bgSize={"cover"}
				overflow={"hidden"}>
			</Box>
		)
	}


	return (
		<>
			<Header/>
			<BackgroundImg/>

			<Grid
				templateColumns={{
					base: "repeat(5, 1fr)",
					sm: "repeat(6, 1fr)",
					md: "repeat(7, 1fr)",
					lg: "repeat(8, 1fr)",
					xl: "repeat(9, 1fr)",
				}} gap={20}>
				<>
					<AnimatePresence>
						{mounts.map((mount, key) => (
							<MountComponent key={key} mount={mount}/>
						))}
					</AnimatePresence>
				</>
			</Grid>
		</>
	)
}

export default Mount