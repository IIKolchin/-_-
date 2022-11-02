import { createSlice } from '@reduxjs/toolkit';
import { TItem } from '../components/draggable-item';
import { AppState } from './store';
import { HYDRATE } from "next-redux-wrapper";


const elementsSlice = createSlice({
  name: 'elements',
  initialState: {
    elements:  [] as TItem[],
    draggedElements: [] as TItem[],
    sortArr: [] as TItem[],
  },
  reducers: {
    setElements(state, { payload }) {
      state.elements = payload;
    },
    setDraggedElements(state, { payload }) {
        state.draggedElements = payload;
      },
    setSortArr(state, { payload }) {
        state.sortArr = payload;
      },

  },
  extraReducers: {
    [HYDRATE]: (state: any, action: { payload: { elements: any; }; }) => {
      return {
        ...state,
        ...action.payload.elements,
      };
    },
  },
});

export const { setElements, setDraggedElements, setSortArr } = elementsSlice.actions;


export default elementsSlice.reducer;