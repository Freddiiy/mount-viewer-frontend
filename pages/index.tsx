import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {IMount} from "../utils/types/Mount.t";
import axios, {Axios, AxiosError} from "axios";
import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {ICharacter} from "../utils/types/Character.t";
import Link from "next/link";
import react from "react";
import GridComponent from "../components/GrindSection/MountComponet";
import {
	RealmContextEU,
	RealmContextUS,
} from "../store/RealmContext/RealmList";
import {IRealm} from "../utils/types/Realm.t";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {useRouter} from "next/router";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import {
	background,
	Box,
	Button,
	Center,
	Container,
	Flex,
	FormControl,
	HStack,
	Input,
	Select,
	Text,
	VStack
} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCharacter, setCharacter} from "../components/Character/CharacterSlice";
import {setMounts} from "../components/Mount/MountSlice";

const Home: NextPage = () => {
	const router = useRouter();
	const [error, setError] = useState("");
	const [isInvalid, setIsInvalid] = useState(false);
	const [formData, setFormData] = useState({
		characterName: "",
		region: "eu",
		realm: "",
	});

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

		const url = `https://tychondi.dk/mount/api/character/${formData.region.toLowerCase()}/${formData.realm.toLowerCase()}/${formData.characterName.toLowerCase()}`
		const response = await axios.get<ICharacter>(url)
			.then((res) => {
				setIsInvalid(false);
				setError("");
				const data = res.data;
				dispatch(setCharacter(data));

				router.push('/mount');
			})
			.catch((err: Error | AxiosError) => {
				if (!axios.isAxiosError(err)) return;

				if (err.response?.status == 404) {
					setError("Character not found");
					setIsInvalid(true)
					return;
				}

				if (err.response?.status == 500) {
					setError("Server made an error");
					setIsInvalid(true)
					return;
				}
			});
	}


	const RealmEU = useContext(RealmContextEU);
	const RealmUS = useContext(RealmContextUS);

	useEffect(() => {
		dispatch(setMounts([]))
	}, [])

	return (
		<>
			<div className="container">
				<div id="proppeties">
					<form onSubmit={handleSubmit}>
						<HStack>
							<Input
								placeholder="Character name"
								name={"characterName"}
								onChange={handleChange}
								isInvalid={isInvalid}
								borderWidth={2}
								borderColor={"yellow"}
								errorBorderColor={"crimson"}
								textColor={"yellow"}
								bg={"red"}
								width={400}
							/>
							<Select
								id="region"
								name={"region"}
								onChange={handleChange}
								isInvalid={isInvalid}
								borderWidth={2}
								borderColor={"yellow"}
								errorBorderColor={"crimson"}
								textColor={"yellow"}
								bg={"red"}
								width={100}
							>
								<option value={"eu"}>EU</option>
								<option value={"us"}>US</option>
							</Select>

							<Select
								required
								id="realm"
								name={"realm"}
								onChange={handleChange}
								isInvalid={isInvalid}
								borderWidth={2}
								borderColor={"yellow"}
								errorBorderColor={"crimson"}
								textColor={"yellow"}
								bg={"red"}
								width={200}

							>
								<option disabled defaultValue={"Realms"} hidden>
									Realms
								</option>

								{formData.region == "eu" ? RealmEU?.map((realm, key) => (
									<option key={key} value={realm.slug}> {realm.name} </option>
								)) : null}
								{formData.region == "us" ? RealmUS?.map((realm, key) => (
									<option key={key} value={realm.slug}> {realm.name} </option>
								)) : null}
							</Select>
						</HStack>
						<Text textColor={"red"} fontSize={"xl"}>{error}</Text>
						<Button
							mt={10}
							type={"submit"}
							borderWidth={2}
							borderColor={"yellow"}
							textColor={"yellow"}
							bgColor={"red"}
							width={100}
							_hover={{backgroundColor: "red.500"}}>
							Login
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Home;
