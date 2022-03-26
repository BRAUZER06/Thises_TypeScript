import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypeSelection: TypedUseSelectorHook<RootState> = useSelector;
