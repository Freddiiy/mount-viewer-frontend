import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store/store";
import {ICharacter} from "../../utils/types/Character.t";

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
		})
	},
})

export const {setCharacter} = characterSlice.actions;
export const selectCharacter = (state: RootState) => state.character.value;
export default characterSlice.reducer;
