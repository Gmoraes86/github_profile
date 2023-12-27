import { createSlice } from '@reduxjs/toolkit';

import * as ACTIONS from './actions';
import { UserProps } from '../../Models/User';
import { RepoProps } from '../../Models/Repo';

interface GithubState {
  user?: UserProps;
  repos?: RepoProps[];
  repoDetails?: RepoProps;
}

const initialState = {} as GithubState;

const gitHub = createSlice({
  name: 'gitHubState',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(ACTIONS.getUserRepos.fulfilled, (state, action) => {
        return {
          ...state,
          repos: action.payload,
        };
      })
      .addCase(ACTIONS.getUserProfile.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
        };
      })
      .addCase(ACTIONS.getRepoDetails.fulfilled, (state, action) => {
        return {
          ...state,
          repoDetails: action.payload,
        };
      });
  },
});

export const gitHubActions = gitHub.actions;

export default gitHub.reducer;
