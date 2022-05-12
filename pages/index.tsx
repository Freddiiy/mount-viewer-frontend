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
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";


const Home: NextPage = () => {

    const router = useRouter();
    const search = () => {
        charaterI.characterName = (document.getElementById('hej') as HTMLInputElement).value;
        charaterI.characterRealm = (document.getElementById('option2') as HTMLInputElement).value;
        charaterI.characterRegion = (document.getElementById('option1') as HTMLInputElement).value;
        charaterI.faction.name = (document.getElementById("") as HTMLInputElement).value;
    }


// fetching data for Character
    const [character, setCharacter] = useState<ICharacter>();
    async function handleGetCharacter(characterRegion:string,characterRealm:string,characterName:string) {
        const response = await fetch(`https://tychondi.dk/mount/api/character/${characterRegion}/${characterRealm}/${characterName}`);
        const data = await response.json();
        console.log(data.faction);
        setCharacter(data);

    }

    // const [compareFetchers, setCompareFetch] = useState("");
    // const compareFetch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const compareF = e.target.value
    //     setCompareFetch(compareF);
    // }

    const handleCharacter = () => {
        handleGetCharacter(
            charaterI.characterRegion=(document.getElementById("option1") as HTMLInputElement).value,
            charaterI.characterRealm = (document.getElementById('option2') as HTMLInputElement).value,
            charaterI.characterName = (document.getElementById('hej') as HTMLInputElement).value
        );
      handleClick();

    }


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
        character?.faction.name  =='Horde' ? router.push("/mount") :
           character?.faction.name == 'Alliance' ? router.push("/Amount") : ""
        console.log(character?.faction.name)


    }


    const RealmEU = useContext(RealmContextEU);
    const RealmUS = useContext(RealmContextUS);

// eslint-disable-next-line react/display-name


    return (
        <>

            <div className="container">

                <div id="proppeties">

                    <input  className="inputCharacter" id="hej" placeholder="Character name">

                    </input>

                    <select onChange={reamlsDescider} id="option1" className="region">
                        <option value="" disabled selected hidden> Region</option>
                        <option>eu</option>
                        <option>us</option>
                    </select>

                    <select required id="option2" className="realms">
                        <option value="1" disabled selected hidden> Realms</option>
                        {
                            realmEU == "eu" ? RealmEU?.map(item => (
                                    <option key={item.id}>{item.slug} </option>))
                                :
                                realmEU == "us" ? RealmUS?.map(item => (
                                    <option key={item.id}>{item.slug}</option>
                                )) : <option disabled>No Region Selected</option>}
                    </select>

                    {/*<select onChange={factionDecider} id="option1" className="region">*/}
                    {/*    <option value="" disabled selected hidden> Faction</option>*/}
                    {/*    <option>Horde</option>*/}
                    {/*    <option>Alliance</option>*/}
                    {/*</select>*/}


                    <div id="button">
                        <button onClick={handleCharacter}  id="innerButton">
                            <>
                                Loggin
                            </>
                        </button>
                    </div>


                </div>

            </div>
            <div>


            </div>



        </>

    )
}

export default Home
