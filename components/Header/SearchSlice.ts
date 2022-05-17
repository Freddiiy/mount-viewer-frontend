import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store/store"
import {IRealm} from "../../utils/types/Realm.t";

interface SearchSlice {
	value: string
}

const initialState: SearchSlice = {
	value: "",
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: ((state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}),
	},
})

export const {setSearch} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;
export default searchSlice.reducer;
