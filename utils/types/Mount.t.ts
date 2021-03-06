export interface IMount {
	itemId: number;
	iconDisplay: string;
	id: number;
	name: string;
	creatureDisplays: string[];
	description: string;
	is_useable: boolean;
	source: Source;
	isOwned: boolean;
}

export interface Source {
	type: Type;
	name: string;
}

export enum Type {
	Achievement = "ACHIEVEMENT",
	Discovery = "DISCOVERY",
	Drop = "DROP",
	InGameShop = "IN-GAME SHOP",
	NoSourceAvailable = "NO SOURCE AVAILABLE",
	Profession = "PROFESSION",
	Promotion = "PROMOTION",
	Quest = "QUEST",
	TradingCardGame = "TRADING CARD GAME",
	Vendor = "VENDOR",
	WorldEvent = "WORLD EVENT",
}