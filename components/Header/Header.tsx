import {useAppSelector} from "../../store/hooks";
import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	IconButton,
	Input,
	Menu, MenuButton, MenuIcon, MenuItem, MenuList,
	Slide, Switch,
	Text,
	useDisclosure, VStack
} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {ChangeEvent, MouseEventHandler, ReactNode, useEffect, useState} from "react";

import {useDispatch} from "react-redux";
import {setOwned, setSearch} from "./SearchSlice";
import {logout} from "../Character/CharacterSlice";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Header() {
	const character = useAppSelector(state => state.character);
	const search = useAppSelector(state => state.search.value);
	const filterIsOwned = useAppSelector(state => state.search.ownedMounts);
	const dispatch = useDispatch()

	const router = useRouter();

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const value = event.target.value;
		dispatch(setSearch(value))
	}

	function handleCheckbox(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const checked = event.target.checked;
		dispatch(setOwned(checked));
	}

	return (
		<>
			<Box
				bg={"blue.800"}
				bgColor={"gray.600"}
				opacity={"98%"}
				px={4}
				py={1}
				position={"fixed"}
				transition={"ease"}
				transitionDuration={"100ms"}
				top={0}
				w={"100%"}
				zIndex={"banner"}
				borderBottomColor={"gray"}
			>
				<Container maxWidth={"container.lg"}>
					<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
						<Link href={"/"} passHref>
							<HStack spacing={2} alignItems={"center"}>
								<Box>
									<Image
										rounded={"xl"}
										src="/logo.png"
										alt="Logo"
										height={9}
										draggable={false}
									/>
								</Box>
								<Text
									color={"white"}
									fontWeight={"hairline"}
									fontSize={20}
									transition={"ease"}
									transitionDuration="600ms"
									display={{base: "none", md: "block"}}
								>
									Mountie
								</Text>
							</HStack>
						</Link>
						<HStack justifyContent={"center"} spacing={4}>
							<Input placeholder={"Search for a mount..."} size={"md"} value={search}
								   textColor={"white"}
								   onChange={handleChange}/>
							<Switch colorScheme={character.value?.faction.type == "HORDE" ? "red" : "blue"}
									isChecked={filterIsOwned} onChange={handleCheckbox}/>
						</HStack>
						<Flex alignItems={"center"}>
							<HStack spacing={4}>
								<Menu>
									<MenuButton>
										<Image
											rounded={"2xl"}
											src={character.value ? character.value.assets.at(0)?.value : "/avatar-fallback.png"}
											alt={"Character avatar"}
											boxSize={"59"}
										/>
									</MenuButton>
									<MenuList bgColor={"gray.600"} textAlign={"left"} textColor={"white"}>
										<MenuItem>
											<VStack>
												<Text>Signed in as</Text>
												<Text
													fontWeight={"semibold"}>{character.value?.name} @ {character.value?.realm.name}</Text>
											</VStack>
										</MenuItem>
										<MenuItem onClick={() => {
											dispatch(logout());
											router.push("/")

										}}>Log out</MenuItem>
									</MenuList>
								</Menu>
							</HStack>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</>
	);
}