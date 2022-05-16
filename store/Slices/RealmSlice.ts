import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";
import {IRealm} from "../../utils/types/Realm.t";

interface RealmSlice {
	value: IRealm[]
}

const initialState: RealmSlice = {
	value: [],
}

export const realmSlice = createSlice({
	name: 'realm',
	initialState,
	reducers: {
		addRealm: ((state, action: PayloadAction<IRealm>) => {
			state.value.push(action.payload);
		}),

		addRealms: ((state, action: PayloadAction<IRealm[]>) => {
			state.value.concat(action.payload);
		}),

		setRealms: ((state, action: PayloadAction<IRealm[]>) => {
			state.value = action.payload;
		})
	},
})

export const {addRealm, addRealms, setRealms} = realmSlice.actions;
export const selectRealm = (state: RootState) => state.realms.value;
export default realmSlice.reducer;
