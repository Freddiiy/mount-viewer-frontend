import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import {IMount} from "../../utils/types/Mount.t";

interface MountSlice {
	value: IMount[]
}

const initialState: MountSlice = {
	value: [],
}

export const mountSlice = createSlice({
	name: 'mount',
	initialState,
	reducers: {
		addMount: ((state, action: PayloadAction<IMount>) => {
			state.value.push(action.payload);
		}),

		addMounts: ((state, action: PayloadAction<IMount[]>) => {
			state.value.concat(action.payload);
		}),

		setMounts: ((state, action: PayloadAction<IMount[]>) => {
			state.value = action.payload;
		})
	},
})

export const { addMount, addMounts, setMounts } = mountSlice.actions;
export const selectMount = (state: RootState) => state.mount.value;
export default mountSlice.reducer;
