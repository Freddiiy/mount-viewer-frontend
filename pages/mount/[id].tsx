import {IMount} from "../../utils/types/Mount.t";
import {Flex, List, ListItem, Spinner, Stack, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/image";
import {useMount} from "../../components/Mount/useMounts";
import {useRouter} from "next/router";
import {array} from "prop-types";
import MountInspect from "../../components/GrindSection/MountInspect";
import {NextPage} from "next";

const MountPage: NextPage = () => {
	const router = useRouter();
	const {"id": mountId} = router.query;

	console.log(mountId);

	return <MountInspect mountId={mountId}/>
}

export default MountPage;

