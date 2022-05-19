import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store/store";
import {ICharacter} from "../../utils/types/Character.t";
import {json} from "stream/consumers";

interface CharacterSlice {
	value: ICharacter | undefined
}

const initialState: CharacterSlice = {
	value: undefined
}

export const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		setCharacter: ((state, action: PayloadAction<ICharacter>) => {
			state.value = action.payload;
			localStorage.setItem("user", JSON.stringify(state.value));
		}),
		logout: ((state) => {
			state.value = undefined;
			localStorage.removeItem("user");
		})
	},
})

export const {setCharacter, logout} = characterSlice.actions;
export const selectCharacter = (state: RootState) => state.character.value;
export default characterSlice.reducer;
