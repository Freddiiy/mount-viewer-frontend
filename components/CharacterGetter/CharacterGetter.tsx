import {ICharacter} from "../../utils/types/Character.t";

export default function CharacterGetter({character}: { character: ICharacter }) {
	return (
		<>
			<p>Get Character here:</p>
			<p>{character.id} <br/></p>
			<p>{character.name} <br/></p>
			<p>{character.realm.name} <br/></p>
		</>
	)
}