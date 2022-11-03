import elementsSlice from './elementsSlice';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import radioSlice from './radioSlice';
import buttonsSlice from './buttonsSlice';
import themeSlice from './themeSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      elements: elementsSlice,
      radio: radioSlice,
      buttons: buttonsSlice,
      theme: themeSlice,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);