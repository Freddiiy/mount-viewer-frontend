
import {ICharacter} from "../../utils/types/Character.t";

export default function CharacterGetter ({character}:{character: ICharacter}){
    return(
        <>
            Get Character here: <p>
            {character.characterID} <br/>
            {character.characterName}<br/>
            {character.characterRealm}<br/>
            {character.characterRegion}</p>
        </>
    )
}