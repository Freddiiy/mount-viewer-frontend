import {NextPage} from "next";
import {useEffect, useState} from "react";
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {IRealm, Realm} from "../utils/types/Realm.t";
import {addRealms, setRealms} from "../store/Slices/RealmSlice";

const Help: NextPage = () => {
	const realms = useAppSelector(state => state.realms.value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function fetchRealms() {
			const response = await axios.get<IRealm>("https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_gb&access_token=EUqXjdsqn1OPR3Lm7A3Rv1BKxRT5VZLXZ5");
			const data: Realm[] = await response.data.realms;
			dispatch(setRealms(data));
		}
		fetchRealms();
	}, [])

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