import React, {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import {useAppSelector} from "../../store/hooks";

export default function Background({children}: { children?: ReactNode }) {
	const character = useAppSelector(state => state.character);
	return (
		<Box
			bgColor={"transparent"}
			px={8}
			py={24}
			mx={"auto"}
			minHeight={"100vh"}
			bgImage={character.value?.faction.type == "HORDE" ? "url(/horde-bg.png)" : "url(/allience-bg.png)"}
			backgroundAttachment={"fixed"}
			position={"relative"}
			bgPos={"center"}
			bgSize={"cover"}
			overflow={"hidden"}
		>
			{children}
		</Box>
	)
}