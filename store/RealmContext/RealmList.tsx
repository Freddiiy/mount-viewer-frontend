import React, {ReactNode} from 'react'
import {NextPage} from "next";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {IRealm} from "../../utils/types/Realm.t";

export const RealmContextEU = React.createContext<IRealm[] | undefined>([]);
export const RealmContextUS = React.createContext<IRealm[] | undefined>([]);

export default function RealmListProvider({children}: { children: ReactNode }) {
	const [realmEU, setRealmEU] = useState<IRealm[] | undefined>();
	const [realmUS, setRealmUS] = useState<IRealm[] | undefined>();


	useEffect(() => {
		async function getEURealms() {
			const response = await axios.get<IRealm[]>("https://tychondi.dk/mount/api/realm/eu");
			const data: IRealm[] = await response.data;

			setRealmEU(data);
		}

		getEURealms();
	}, [])

	useEffect(() => {
		async function getUSRealms() {
			const response = await axios.get<IRealm[]>("https://tychondi.dk/mount/api/realm/us");
			const data: IRealm[] = await response.data;

			setRealmUS(data);
		}

		getUSRealms();
	}, [])


	return (
		<>
			<RealmContextEU.Provider value={realmEU}>
				<RealmContextUS.Provider value={realmUS}>
					{children}
				</RealmContextUS.Provider>
			</RealmContextEU.Provider>
		</>
	)
}


