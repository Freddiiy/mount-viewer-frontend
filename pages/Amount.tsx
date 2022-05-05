import {NextPage} from "next";
import GridComponent from "../components/GrindSection/GridComponet";
import React, {useEffect, useState} from "react";
import {IMount, mountArray} from "../utils/types/Mount.t";
import {ICharacter, charaterI} from "../utils/types/Character.t";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";

const Amount: NextPage = () => {

    const [mounts, setMounts] = useState<IMount[]>([]);

    useEffect(() => {
        setMounts(mountArray)
    })
    const [characterI, setCharacter] = useState<ICharacter>();
    useEffect(() => {
        setCharacter(charaterI)
    })


    return (
        <>
            <div className="navBar2">
                <a className="active2" href="#home">
                    <p>{charaterI.characterName}</p>
                </a>
            </div>

            <div className="container3">
                <br/>
                <h1></h1>
                {mounts.map((mount, key) => (
                    <React.Fragment key={key}>
                        <GridComponent />
                        <GridComponent mount={mount} />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Amount