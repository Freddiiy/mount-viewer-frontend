import {Center, Modal, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import MountInspect from "../GrindSection/MountInspect";
import {useRouter} from "next/router";

export default function MountModal() {
	const router = useRouter();
	return (
		<>
			<Center>
				<Modal isOpen={!!router.query.mountId} onClose={() => router.push("/mount")} size={"6xl"}
					   isCentered>
					<ModalOverlay bgColor={"blackAlpha.800"}/>
					<ModalContent
						bgColor={"transparent"}
						shadow={"none"}
						mt={{base: 150, md: 0}}
						mx={{base: 2, md: 0}}
						rounded={"none"}
						alignItems={"center"}
					>
						<ModalCloseButton color={"white"}/>
						<MountInspect mountId={router.query.mountId}/>
					</ModalContent>
				</Modal>
			</Center>
		</>
	);
}
