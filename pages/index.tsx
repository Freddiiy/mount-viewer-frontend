import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IMount} from "../utils/types/Mount.t";
import axios from "axios";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [mount, setMount] = useState<IMount>();
  useEffect(() => {
      async function getMounts(){
          const ikkeFetch = await axios.get<IMount>("url");
          const data = await ikkeFetch.data;
          setMount(data);
      }
  })
  return (
      <>
        {mount ? <h1>{mount.mountId}</h1> : <h1>Ingen mounts</h1>}
      </>
  )
}

export default Home
