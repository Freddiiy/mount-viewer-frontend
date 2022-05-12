
export interface ICharacter{
    characterID:number,
    characterName: string
    characterRegion: string,
    characterRealm:string,
    faction:Faction,
    characterAvatar: string,
}


export interface Faction {
    type: string;
    name: string;
}


export const charaterI: ICharacter =
    {
        characterID:1,
        characterName:"",
        characterRegion:"",
        characterRealm:"",
        faction:{
            type:"",
            name:"",
        },
        characterAvatar:""
    }



//
// export interface ICharacter {
//     id:      number;
//     name:    string;
//     level:   number;
//     gender:  Gender;
//     faction: Faction;
//     race:    Race;
// }
//
// export interface Gender {
//     type: string;
//     name: string;
// }
//
// export interface Faction {
//     type: string;
//     name: string;
// }
//
// export interface Race {
//     name: string;
//     id:   number;
// }
//
//
// export const charaterI: ICharacter =
//     {
//         id: 1,
//         name:"",
//         level:1,
//         gender: {
//             type: "",
//             name: ""
//         },
//         faction: {
//             type: "",
//             name: ""
//         },
//         race: {
//             name: "",
//             id: 1
//         }
//     }

