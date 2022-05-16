import asset from "../../public/Reagent_Bank-small.png"
import {IMount} from "../../utils/types/Mount.t";
import {Image} from "@chakra-ui/image";
import {
	Box,
	Center,
	Text,
	VStack,
	useDisclosure,
	Flex,
	ModalContent,
	Modal,
	Stack,
	ListItem,
	List, ModalCloseButton, ModalOverlay, ModalHeader
} from "@chakra-ui/react";
import {motion} from "framer-motion";

export default function MountComponent({mount}: { mount: IMount }) {
	const {isOpen, onOpen, onClose} = useDisclosure();

	function MountImage() {
		return (
			<>
				<Box onClick={onOpen}>
					<VStack>
						<motion.div
							whileHover={{scale: 1.03, cursor: "pointer"}}
							whileTap={{scale: 0.96}}
						>
							<Image
								rounded={"2xl"}
								boxSize={100}
								src={mount.iconDisplay}
								alt={"Image of " + mount.name}
								draggable={false}/>
						</motion.div>
						<Text textColor={"white"}>{mount.name}</Text>
					</VStack>
				</Box>
			</>
		)
	}

	function CardModal() {
		return (
			<>
				<Center>

					<Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
						<ModalOverlay bgColor={"blackAlpha.800"}/>
						<ModalContent
							bgColor={"transparent"}
							shadow={"none"}
							mt={{base: 150, md: 0}}
							mx={{base: 2, md: 0}}
							rounded={"none"}
							alignItems={"center"}
						>
							<ModalHeader>{mount.name}</ModalHeader>
							<ModalCloseButton color={"white"}/>
							<Stack direction={{base: "column", md: "row"}}>
								<Image
									rounded={"2xl"}
									boxSize={500}
									src={mount.creatureDisplays.at(0)}
									alt={"Image of " + mount.name}
									draggable={false}
								/>
								<Box>
									<VStack>
										<Text
											color={"white"}
											fontSize={{base: "2xl", md: "4xl"}}
											mb={3}
										>
											{mount.name}
										</Text>
										<Text color={"gray.300"} fontSize={"lg"} mb={3}>
											{mount.id}
										</Text>
										<Text
											color={"white"}
											fontSize={"lg"}
										>
											{mount.description}
										</Text>
									</VStack>
									<List spacing={3} mt={10}>
										<MountListItem title={"Mount ID "} text={mount.id.toString()}/>
										<MountListItem title={"Description "} text={mount.description}/>
										<MountListItem title={"Source "} text={mount.source.type}/>
									</List>
								</Box>
							</Stack>
						</ModalContent>
					</Modal>
				</Center>
			</>
		);
	}

	return (
		<>
			<Center>
				<MountImage/>
				<CardModal/>
			</Center>
		</>
	)
}

function MountListItem({title, text,}: { title: string; text: string | undefined }) {
	return (
		<ListItem>
			<Flex display={"inline"}>
				<Text color={"white"}>
					<Text color={"orange.300"} display={"inline"}>
						{title}:{" "}
					</Text>
					{text}
				</Text>
			</Flex>
		</ListItem>
	);
}