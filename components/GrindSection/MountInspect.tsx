import {useRouter} from "next/router";
import {useMount} from "../Mount/useMounts";
import {Flex, List, ListItem, Spinner, Stack, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";

export default function MountInspect({mountId}: { mountId: any }) {
	const {mount, isLoading, isError} = useMount(parseInt(mountId));

	if (isLoading) return <Spinner/>
	if (isError) return <h1>Error initializing mount</h1>

	return (
		<>
			<Stack direction={{base: "column", md: "row"}}>
				<Image
					boxSize={500}
					src={mount?.creatureDisplays.at(0)}
					alt={"Image of " + mount?.name}
					draggable={false}
				/>
				<List spacing={3} mt={10}>
					<MountListItem title={"Index ID "} text={mount?.id.toString()}/>
					<MountListItem title={"Description "} text={mount?.description}/>
					<MountListItem title={"Source "} text={mount?.source.type}/>
				</List>
			</Stack>
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