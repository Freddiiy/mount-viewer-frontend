import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {charaterI, ICharacter} from "../utils/types/Character.t";
import Link from "next/link";
import react from 'react'
import GridComponent from "../components/GrindSection/GridComponet";
import {RealmContextEU, RealmContextUS} from "../store/RealmContext/RealmList";
import {IRealm} from "../utils/types/Realm.t";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {useRouter} from "next/router";


const Home: NextPage = () => {

    const router = useRouter();
    const search = () => {
        charaterI.characterName = (document.getElementById('hej') as HTMLInputElement).value;
        charaterI.characterRealm = (document.getElementById('option2') as HTMLInputElement).value;
        charaterI.characterRegion = (document.getElementById('option1') as HTMLInputElement).value;
        charaterI.characterFaction = (document.getElementById("") as HTMLInputElement).value;
    }

    // Fetching data from mounts
    const [mount, setMount] = useState<IMount>();
    useEffect(() => {
        async function getMounts() {
            const ikkeFetch = await axios.get<IMount>("url");
            const data = await ikkeFetch.data;
            setMount(data);
        }
    })

// fetching data for Character
    const [character, setCharacter] = useState<ICharacter>();
    useEffect(() => {
        async function getCharacter() {
            const fetchC = await axios.get<ICharacter>("url");
            const data = await fetchC.data;
            setCharacter(data);
        }
    })


    const [realmEU, setRealmEU] = useState("");
    const reamlsDescider = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const realmse = e.target.value
        setRealmEU(realmse)

    }


    const [characterFactioc, setCharacterFaction] = useState("")
    const factionDecider = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const faction = e.target.value
        setCharacterFaction(faction)
        console.log(faction)

    }

    const handleClick = () => {
            characterFactioc == "Horde" ? router.push("/mount") :
            characterFactioc == "Alliance" ? router.push("/Amount") : ""

    }


const RealmEU = useContext(RealmContextEU);
const RealmUS = useContext(RealmContextUS);

// eslint-disable-next-line react/display-name


return (
    <>
    {/*
        <div className="container">

            <div id="proppeties">

                <input className="inputCharacter" id="hej" placeholder="Character name"/>

                <select onChange={reamlsDescider} id="option1" className="region">
                    <option value="" disabled selected hidden> Region</option>
                    <option>EU</option>
                    <option>US</option>
                </select>

                <select required id="option2" className="realms">
                    <option value="1" disabled selected hidden> Realms</option>
                    {
                        realmEU == "EU" ? RealmEU?.map(item => (
                                <option key={item.id}>{item.name}</option>))
                            :
                            realmEU == "US" ? RealmUS?.map(item => (
                                <option key={item.id}>{item.name}</option>
                            )) : <option disabled>No Region Selected</option>}
                </select>

                <select onChange={factionDecider} id="option1" className="region">
                    <option value="" disabled selected hidden> Faction</option>
                    <option>Horde</option>
                    <option>Alliance</option>
                </select>


                <div id="button">
                    <button onClick={handleClick} id="innerButton">
                        <>
                            Loggin
                        </>
                    </button>
                </div>



            </div>

        </div>
        <div>


        </div>




    */}
    </>

)
}

export default Home
