import { configureStore } from "@reduxjs/toolkit";
import announcement from "./announcementSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { announcement: announcement.reducer /* quiz slice HERE*/ },
});

export type RootState = ReturnType<typeof store.getState>;
export const UseAppDispatch: () => typeof store.dispatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
