import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store/store"
import {IRealm} from "../../utils/types/Realm.t";

interface SearchSlice {
	value: string,
	ownedMounts: boolean
}

const initialState: SearchSlice = {
	value: "",
	ownedMounts: false
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: ((state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}),
		setOwned: ((state, action: PayloadAction<boolean>) => {
			state.ownedMounts = action.payload;
		})
	},
})

export const {setSearch, setOwned} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search;
export default searchSlice.reducer;
