import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {ICharacter} from "../utils/types/Character.t";
import mount from "./mount";
import Link from "next/link";
import react from 'react'

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
    const MyButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                Click Me
            </a>
        )
    })

    return (
        <>
<Link href="/mount" passHref>
    <MyButton/>
</Link>
        {character ? <h1>{character.name}</h1> : <h1>ingen Character</h1>}
        {mount ? <h1>{mount.mountId}</h1> : <h1>Ingen mounts</h1>}

        </>
    )
}

export default Home
