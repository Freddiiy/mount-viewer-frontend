import {NextPage} from "next";
import GridComponent from "../components/GrindSection/GridComponet";
import React, {useEffect, useState} from "react";
import {IMount, mountArray} from "../utils/types/Mount.t";
import {ICharacter, charaterI} from "../utils/types/Character.t";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import Link from "next/link";

const Mount: NextPage = () => {

    const [mounts, setMounts] = useState<IMount[]>([]);

    useEffect(() => {
        setMounts(mountArray)
    })
    const [characterI, setCharacter] = useState<ICharacter>();
    useEffect(() => {
        setCharacter(charaterI)
    })

    const [avatar, setAvatar] = useState("");
    const getAvatar = async () => {
        const response = await fetch(`https://tychondi.dk/mount/api/character/character-media/${charaterI.characterRegion}/${charaterI.characterRealm}/${charaterI.characterName}`)
            .then(response=> response.json())
            .then(data =>{
                setAvatar(data)
            })
    }

    return (
        <>
            <div className="navBar">
                <ul>
                    <li className="dropdown">
                        <a href="javascript:void(0)">{characterI?.characterName}</a>
                        <img src="" alt=""/>
                        <div className="dropdown-content">
                            <a href="#" className="link2"><p className="cName">{charaterI.characterName}</p></a>
                            <a href="#" className="link2">{characterI?.characterRealm}</a>
                            <a href="#" className="link2">{characterI?.characterRegion}</a>
                            <Link href="/" passHref>
                                <a href="#" className="link2">logout</a>
                            </Link>
                        </div>
                    </li>
                </ul>


            </div>

            <div className="container2">
                <br/>
                <h1></h1>
                {mounts.map((mount, key) => (
                    <React.Fragment key={key}>
                        <GridComponent/>
                        <GridComponent mount={mount}/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Mount