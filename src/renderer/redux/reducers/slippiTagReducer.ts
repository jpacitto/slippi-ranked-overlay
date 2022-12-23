import { createAction, createReducer } from '@reduxjs/toolkit';

interface SlippiTagState {
  tag: string | null;
}

const changeTag = createAction<string>('slippiTag/changeTag');

const initialState = { tag: null } as SlippiTagState;

const slippiTagReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTag, (state, action) => {
    state.tag = action.payload;
  });
});

export default slippiTagReducer;
