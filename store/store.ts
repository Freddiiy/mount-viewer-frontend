import {configureStore} from "@reduxjs/toolkit";
import {realmSlice} from "./Slices/RealmSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
	reducer: {
		realms: realmSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
