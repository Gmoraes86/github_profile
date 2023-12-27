import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiService } from '../../Utils/ApiService';

export const getUserProfile = createAsyncThunk(
  'getUserProfile',
  async (user: string) => {
    const response = await ApiService().get(`/users/${user}`);

    return response;
  }
);

export const getUserRepos = createAsyncThunk(
  'getUserRepos',
  async (user: string) => {
    const response = await ApiService().get(`/users/${user}/repos`);

    return response;
  }
);

export const getRepoDetails = createAsyncThunk(
  'getRepoDetails',
  async (full_name: string) => {
    const response = await ApiService().get(`/repos/${full_name}`);

    return response;
  }
);
