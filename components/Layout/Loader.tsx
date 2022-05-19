import {Box, Center, Spinner} from "@chakra-ui/react";

export default function Loader() {

	return (
		<>
			<Center height={"100vh"}>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='red.500'
					size='xl'/>
			</Center>
		</>
	)
}