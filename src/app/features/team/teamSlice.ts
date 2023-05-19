import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeam: (state, action: PayloadAction<{ team: string }>) => {
      if(action.type == 'country') {
        state.country = action.payload.team;
      }

      if(action.type == 'season') {
        state.season = action.payload.team;
      }

      if(action.type == 'league') {
        state.league = action.payload.team;
      }

      if(action.type == 'team') {
        state.team = action.payload.team;
      }
    },
  },
});

export const { setTeam } = teamSlice.actions;
export default teamSlice.reducer;
