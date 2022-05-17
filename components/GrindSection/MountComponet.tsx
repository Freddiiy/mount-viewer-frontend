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
import {useRouter} from "next/router";
import Link from "next/link";
import MountInspect from "./MountInspect";

export default function MountComponent({mount}: { mount: IMount }) {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const router = useRouter();

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
								<Image
									rounded={"full"}
									boxSize={100}
									src={mount.iconDisplay}
									alt={"Image of " + mount.name}
									draggable={false}/>
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