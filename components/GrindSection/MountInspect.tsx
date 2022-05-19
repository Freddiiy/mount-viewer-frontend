import {useMount} from "../../utils/hooks/useMounts";
import {Box, Center, Flex, List, ListItem, Spinner, Stack, Text, VStack} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import Loader from "../Layout/Loader";

export default function MountInspect({mountId}: { mountId: any }) {
	const {mount, isLoading, isError} = useMount(parseInt(mountId));

	if (isLoading) return <Loader/>
	if (isError) return <h1>Error initializing mount</h1>

	return (
		<>
			<Center>
				<Stack direction={{base: "column", md: "row"}}>
					<Box>
						<VStack>
							<Text
								color={"white"}
								fontSize={{base: "2xl", md: "4xl"}}
								mb={3}
							>
								{mount?.name}
							</Text>
							<Text color={"gray.300"} fontSize={"2xl"} mb={3}>
								{mount?.id}
							</Text>
							<Text
								color={"white"}
								fontSize={"lg"}
								pb={30}
							>
								{mount?.description}
							</Text>
						</VStack>
						<Center>

							<Image
								rounded={"2xl"}
								boxSize={500}
								src={mount?.creatureDisplays.at(0)}
								alt={"Image of " + mount?.name}
								draggable={false}
							/>
						</Center>
						<List spacing={3} mt={10}>
							<MountListItem title={"Index ID "} text={mount?.id.toString()}/>
							<MountListItem title={"Description "} text={mount?.description}/>
							<MountListItem title={"Source "} text={mount?.source.type}/>
						</List>
					</Box>
				</Stack>
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