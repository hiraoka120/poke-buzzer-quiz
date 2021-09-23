import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

export type Game = {
  playing: boolean,
  correctAnswers: string[],
}

const initialState = {
  playing: false,
  correctAnswers: [],
} as Game;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state: Game, action: PayloadAction<boolean>) => ({
      ...state,
      playing: action.payload
    }),
    setCorrectAnswer: (state: Game, action: PayloadAction<string>) => ({
      ...state,
      correctAnswers: [...state.correctAnswers, action.payload]
    }),
    resetCorrectAnswer: (state: Game) => ({
      ...state,
      correctAnswers: []
    }),
  }
});

export const { setGame, setCorrectAnswer, resetCorrectAnswer } = gameSlice.actions;

const store = configureStore({ reducer: gameSlice.reducer });

export default store;
