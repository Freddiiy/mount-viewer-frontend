import asset from "../../public/Reagent_Bank-small.png"
import {IMount} from "../../utils/types/Mount.t";

export default function GridComponent({mount}: { mount?: IMount }) {
	function Mount({mount}: { mount: IMount }) {
		return (
			<>
				<p>{mount.mountId}</p><br/>
				<p>{mount.name}</p><br/>
				<p>{mount.isOwned}</p><br/>
				<p>{mount.ItemId}</p><br/>
			</>
		)
	}

	return (
		<>
			<img src={"/Reagent_Bank-small.png"} alt={""}/>
			{mount ? <Mount mount={mount}/> : null}
		</>
	)
};