import asset from "../../public/Reagent_Bank-small.png"
import {IMount} from "../../utils/types/Mount.t";
import {Image} from "@chakra-ui/image";
import {
	Box,
	Center,
	Text,
	VStack,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import Link from "next/link";
import MountInspect from "./MountInspect";
import {MutableRefObject, useRef} from "react";
import {useIntersection} from "@mantine/hooks";
import {Icon, SmallCloseIcon} from "@chakra-ui/icons";
import truncate from "../../utils/truncate";

export default function MountComponent({mount}: { mount: IMount }) {
	function MountImage() {
		return (
			<>
				<Link href={`mount/?mountId=${mount.id}`} as={`/mount/${mount.id}`} passHref>
					<Box>
						<VStack>
							<motion.div
								whileHover={{scale: 1.03, cursor: "pointer"}}
								whileTap={{scale: 0.96}}
							>
								<Box opacity={mount.isOwned ? "100%" : "50%"}>
									<Center>
										<Image
											rounded={"2xl"}
											boxSize={{base: 75, md: 100}}
											src={mount.iconDisplay}
											alt={"Image of " + mount.name}
											draggable={false}
											position={"absolute"}/>
										<Image boxSize={{base: 86, md: 120}} rounded={"xl"} src={"/backpack-icon.png"}
											   alt={"backpack icon"}/>
										{!mount.isOwned
											? <SmallCloseIcon boxSize={{base: 150, md: 200}} position={"absolute"}
															  color={"red"}/>
											: null}

									</Center>
								</Box>
							</motion.div>
							<Text display={{base: "none", md: "block"}} textColor={"white"}
								  textAlign={"center"}>{mount.name}</Text>
							<Text display={{base: "block", md: "none"}} textColor={"white"}
								  textAlign={"center"}>{truncate(mount.name)}</Text>
						</VStack>
					</Box>
				</Link>
			</>
		)
	}

	return (
		<>
			<Center>
				<MountImage/>
			</Center>
		</>
	)
}