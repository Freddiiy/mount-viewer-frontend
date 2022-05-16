import {NextPage} from "next";
import GridComponent from "../components/GrindSection/MountComponet";
import React, {useEffect, useState} from "react";
import {IMount, mountArray} from "../utils/types/Mount.t";
import {ICharacter, charaterI} from "../utils/types/Character.t";
import CharacterGetter from "../components/CharacterGetter/CharacterGetter";
import Link from "next/link";

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
				<ul>
					<li className="dropdown2">
						<a href="javascript:void(0)" className="dropbtn2">{charaterI?.characterName}</a>
						<div className="dropdown2-content">
							<a href="#" className="link"><p className="cName">{charaterI.characterName}</p></a>
							<a href="#" className="link">{charaterI.characterRealm}</a>
							<Link href="/" passHref>
								<a href="#" className="link">logout</a>
							</Link>
						</div>
					</li>
				</ul>


			</div>
			<div className="container3">
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

export default Amount