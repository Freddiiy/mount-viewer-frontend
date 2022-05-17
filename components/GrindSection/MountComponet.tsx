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
								<Center>
									<Image
										rounded={"2xl"}
										boxSize={100}
										src={mount.iconDisplay}
										alt={"Image of " + mount.name}
										draggable={false}
										position={"absolute"}/>
									<Image boxSize={120} rounded={"xl"} src={"/backpack-icon.png"}
										   alt={"backpack icon"}/>
								</Center>
							</motion.div>
							<Text textColor={"white"}>{mount.name}</Text>
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