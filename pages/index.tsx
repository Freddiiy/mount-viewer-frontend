import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {ICharacter} from "../utils/types/Character.t";
import Link from "next/link";
import react from 'react'
import GridComponent from "../components/GrindSection/GridComponet";

const Home: NextPage = () => {


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

    // eslint-disable-next-line react/display-name


    return (
        <>


            <div className="container">

                <div id="proppeties">

                    <input className="inputCharacter" placeholder="Character name"/>

                    <select id="option" className="region">
                        <option value="" disabled selected hidden> Region</option>
                        <option>EU</option>
                        <option>US</option>
                    </select>

                    <select required id="option" className="realms">
                        <option value="1" disabled selected hidden> Realms</option>
                        <option>Terro-mill</option>
                        <option>STuuff</option>
                        <option>Arronish</option>
                        <option>Habbiibi</option>
                    </select>




                    <div id="button">
                        <Link href="/mount" passHref>
                            <button id="innerButton">
                                <>
                                Loggin
                                    {/*{character ? <h1>{character.name}</h1> : <h1>ingen Character</h1>}*/}
                                </>
                            </button>
                        </Link>
                    </div>

                    <div id="button">
                        <Link href="/Amount" passHref>
                            <button  className="button2">
                                <>
                                    Loggin
                                    {/*{character ? <h1>{character.name}</h1> : <h1>ingen Character</h1>}*/}
                                </>
                            </button>
                        </Link>
                    </div>

                </div>


            </div>




            {/*{mount ? <h1>{mount.mountId}</h1> : <h1>Ingen mounts</h1>}*/}


        </>
    )
}

export default Home
