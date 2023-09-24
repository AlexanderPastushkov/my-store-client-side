import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppStateType, AppDispatch } from "../toolkitRedux/index.js";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
