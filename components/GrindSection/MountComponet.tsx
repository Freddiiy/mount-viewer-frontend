import asset from "../../public/Reagent_Bank-small.png"
import {IMount} from "../../utils/types/Mount.t";
import {Image} from "@chakra-ui/image";

export default function MountComponent({mount}: { mount: IMount }) {
	return (
		<>
			<Image src={mount.creatureDisplays.at(0)} alt={"Display creature image for " + mount.name} boxSize={150}/>
		</>
	)
}