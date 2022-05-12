import React, {ReactNode} from 'react'
import {NextPage} from "next";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {IRealm, Realm} from "../../utils/types/Realm.t";

export const RealmContextEU = React.createContext<Realm[] | undefined>([]);
export const RealmContextUS = React.createContext<Realm[] | undefined>([]);

export default function RealmListProvider({children}: {children: ReactNode}) {
    const [realmEU, setRealmEU] = useState<Realm[] | undefined>();
    const [realmUS, setRealmUS] = useState<Realm[] | undefined>();



    useEffect(() => {
        async function getEURealms() {
            const response = await axios.get<IRealm>("https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_gb&access_token=USkXF3CuiD4AVKfy6pHio50ueavsEOEiD9");
            const data: Realm[] = await response.data.realms;
            setRealmEU(data);
        }
        getEURealms();
    })

    useEffect(() => {
        async function getUSRealms() {
            const response = await axios.get<IRealm>("https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US&access_token=USkXF3CuiD4AVKfy6pHio50ueavsEOEiD9");
            const data: Realm[] = await response.data.realms;
            setRealmUS(data);
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


