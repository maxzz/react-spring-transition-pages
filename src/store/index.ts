import { proxy } from "valtio";

type AppState = {
    dark: boolean;
};

const initialAppState = {
    dark: false,
};

export const appState = proxy({ initialState: initialAppState });
