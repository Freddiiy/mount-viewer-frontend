import {IMount} from "../../utils/types/Mount.t";
import {Box, Flex, List, ListItem, Spinner, Stack, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {useMount} from "../../utils/hooks/useMounts";
import {useRouter} from "next/router";
import {array} from "prop-types";
import MountInspect from "../../components/GrindSection/MountInspect";
import {NextPage} from "next";
import React, {ReactNode} from "react";

const MountPage: NextPage = () => {
	const router = useRouter();
	const {"id": mountId} = router.query;

	function Background({children}: { children: ReactNode }) {
		return (
			<Box
				px={8}
				py={24}
				mx={"auto"}
				backgroundImage={"url(/allience-bg.png)"}
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
			<Background>
				<MountInspect mountId={mountId}/>
			</Background>
		</>
	)
}

export default MountPage;

