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
	Slide,
	Text,
	useDisclosure, VStack
} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {ChangeEvent, ReactNode, useEffect, useState} from "react";
import Link from "next/link";
import {EmailIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";
import searchSlice, {setSearch} from "./SearchSlice";
import {useDebouncedValue} from "@mantine/hooks";
import {logout} from "../Character/CharacterSlice";
import {useRouter} from "next/router";

export default function Header() {
	const character = useAppSelector(state => state.character);
	const search = useAppSelector(state => state.search);
	const dispatch = useDispatch()

	const router = useRouter();

	const {isOpen, onOpen, onClose} = useDisclosure();
	const [isScrolled, setScrolled] = useState<boolean>(false);
	const textColor = isScrolled ? "black" : "white";
	const hoverTextColor = isScrolled ? "blue.400" : "blue.200";
	const textBg = "gray.100";

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const value = event.target.value;

		dispatch(setSearch(value))
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrolled(window.scrollY > 0);
		});
	}, [setScrolled]);

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
							>
								Mountie
							</Text>
						</HStack>
						<HStack justifyContent={"center"} spacing={4}>
							<Input placeholder={"Search for a mount..."} size={"md"} value={search.value}
								   textColor={"white"}
								   onChange={handleChange}/>
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
									<MenuList>
										<MenuItem>
											<VStack>
												<Text>Signed in as</Text>
												<Text fontWeight={"semibold"}>{character.value?.name} @ {character.value?.realm.name}</Text>
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