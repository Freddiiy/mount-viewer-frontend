export interface IMount {
	mountId: number,
	name: string,
	isOwned: boolean,
	ItemId : number,
}

export const mountArray: IMount[] = [
	{
		mountId: 1,
		name: "Sigurd",
		isOwned: true,
		ItemId: 742
	},
	{
		mountId: 2,
		name: "Johan",
		isOwned: false,
		ItemId: 5213
	}
]

