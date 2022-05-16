import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {ICharacter} from "../utils/types/Character.t";
import Link from "next/link";
import react from "react";
import GridComponent from "../components/GrindSection/GridComponet";
import {
	RealmContextEU,
	RealmContextUS,
} from "../store/RealmContext/RealmList";
import {IRealm} from "../utils/types/Realm.t";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {useRouter} from "next/router";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import {Box, Center, Container, Flex, FormControl, HStack, Input, Select, Text, VStack} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCharacter, setCharacter} from "../components/Character/CharacterSlice";

const Home: NextPage = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		characterName: "",
		region: "eu",
		realm: "",
	});

	const character = useAppSelector(state => state.character);
	const dispatch = useAppDispatch()

	function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		event.preventDefault();

		const value = event.target.value;
		setFormData({
			...formData,
			[event.target.name]: value,
		})
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		if (formData.characterName == "") return;
		if (formData.region == "") return;
		if (formData.realm == "") return;

		const url = `https://tychondi.dk/mount/api/character/${formData.region}/${formData.realm}/${formData.characterName}`
		const response = await axios.get<ICharacter>(url);
		const data = await response.data;
		dispatch(setCharacter(data));

		console.log("wallah")

		await router.push('/mount');
	}

	const RealmEU = useContext(RealmContextEU);
	const RealmUS = useContext(RealmContextUS);

	return (
		<>
			{/*
			<Box
				px={8}
				py={24}
				mx={"auto"}
				w={"full"}
				h={"100vh"}
				backgroundImage="url(/background.jpg)"
				bgPos={"center"}
				bgSize={"cover"}
				overflow={"hidden"}>

				<Flex h={"full"} alignItems={"center"} justifyContent={"center"}>
					<Center>
						<Container maxW={"container.lg"}>
							<Box
								w={"full"}
								mx={"auto"}
								justifyContent={"center"}
								alignItems={"center"}
								textAlign={"center"}
							>
								<FormControl>
									<VStack>
										<Input name={"charactername"} type={"input"} placeholder={"Character name"}/>
										<Select name={"region"} placeholder={"Select region"}>
											<option>EU</option>
											<option>US</option>
										</Select>
									</VStack>
								</FormControl>
							</Box>
						</Container>
					</Center>
				</Flex>
			</Box>

			*/}

			<div className="container">
				<div id="proppeties">
					<form onSubmit={handleSubmit}>
						<input
							className="inputCharacter"
							placeholder="Character name"
							name={"characterName"}
							onChange={handleChange}
						/>

						<select id="region" className="selectOption" name={"region"} onChange={handleChange}>
							<option value={"eu"}>EU</option>
							<option value={"us"}>US</option>
						</select>

						<select required id="realm" className="selectOption" name={"realm"} onChange={handleChange}>
							<option disabled defaultValue={"Realms"} hidden>
								Realms
							</option>

							{formData.region == "eu" ? RealmEU?.map((realm, key) => (
								<option key={key} value={realm.slug}> {realm.name} </option>
							)) : null}
							{formData.region == "us" ? RealmUS?.map((realm, key) => (
								<option key={key} value={realm.slug}> {realm.name} </option>
							)) : null}
						</select>
						<div id="button">
							<button className={"innerButton"} type={"submit"}>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
			<div>
				{character.value ? (
					<>
						<p>{character.value.name} {character.value.id} {character.value.faction.name} {character.value.gender.name}</p>
					</>
				) : (
					<p>No character</p>
				)}
			</div>
		</>
	);
};

export default Home;
