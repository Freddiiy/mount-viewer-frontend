import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState} from "../store";
import {Realm} from "../../utils/types/Realm.t";

interface RealmSlice {
	value: Realm[]
}

const initialState: RealmSlice = {
	value: [],
}

export const realmSlice = createSlice({
	name: 'realm',
	initialState,
	reducers: {
		addRealm: ((state, action: PayloadAction<Realm>) => {
			state.value.push(action.payload);
		}),

		addRealms: ((state, action: PayloadAction<Realm[]>) => {
			state.value.concat(action.payload);
		}),

		setRealms: ((state, action: PayloadAction<Realm[]>) => {
			state.value = action.payload;
		})
	},
})

export const { addRealm, addRealms, setRealms } = realmSlice.actions;
export const selectRealm = (state: RootState) => state.realms.value;
export default realmSlice.reducer;
