export interface ICharacter {
	assets: Asset[];
	region: string,
	id: number;
	name: string;
	level: number;
	gender: Gender;
	faction: Faction;
	race: Race;
	realm: Realm;

}

export interface Asset {
	key: string;
	value: string;
	file_data_id: number;
}

export interface Faction {
	type: string;
	name: string;
}

export interface Gender {
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

export interface ICharacterMount {
	mount: IBasicMount;
	isUseable: boolean;
	isFavorite: boolean;
}

export interface IBasicMount {
	id: number;
	name: string;
}


