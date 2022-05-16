export interface ICharacter {
	id: number;
	name: string;
	level: number;
	gender: Faction;
	faction: Faction;
	race: Race;
	realm: Realm;
}

export interface Faction {
	type: string;
	name: string;
}

export interface Race {
	name: string;
	id: number;
}

export interface Realm {
	name: string;
	id: number;
	slug: string;
}
