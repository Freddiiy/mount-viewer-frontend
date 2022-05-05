import React, {ReactNode} from 'react'
import {NextPage} from "next";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {IRealm} from "../../utils/types/Realm.t";

export const RealmContextEU = React.createContext<IRealm[] | undefined>([]);
export const RealmContextUS = React.createContext<IRealm[] | undefined>([]);

export default function RealmListProvider({children}: {children: ReactNode}) {
    const [realmEU, setRealmEU] = useState<IRealm[] | undefined>();
    const [realmUS, setRealmUS] = useState<IRealm[] | undefined>();



    useEffect(() => {
        async function getEURealms() {
            const response = await axios.get<IRealm>("https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_gb&access_token=USGLB4EQYsy6oaY1Fow9JZ16IFREojxhaV");
            const data = await response.data;
            setRealmEU([data]);
        }
        getEURealms();
    })

    useEffect(() => {
        async function getUSRealms() {
            const response = await axios.get<IRealm>("https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US&access_token=USGLB4EQYsy6oaY1Fow9JZ16IFREojxhaV");
            const data = await response.data;
            setRealmUS([data]);
        }
        getUSRealms();
    })


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


