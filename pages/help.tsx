import {NextPage} from "next";
import {useAppDispatch, useAppSelector} from "../store/hooks";

const Help: NextPage = () => {
	const realms = useAppSelector(state => state.realms.value);
	const dispatch = useAppDispatch();

	return (
		<>
			<h1>Help</h1>
			{realms.map((realms, key) => (
				<h1 key={key}>{realms.name}</h1>
			))}
		</>
	)
}

export default Help