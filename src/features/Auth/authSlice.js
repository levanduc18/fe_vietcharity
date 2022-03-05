import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '.../api/userApi'
import storageUser from '.../constants/storageUser'

// eslint-disable-next-line import/prefer-default-export
export const userLogin = createAsyncThunk(
  'user/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.login(payload)
      if (response.data.role === 'CONTRIBUTOR') {
        if (payload.remember) {
          localStorage.setItem(storageUser.TOKEN, response.data.token)
        } else {
          sessionStorage.setItem(storageUser.TOKEN, response.data.token)
        }
        return response.data
      }
      return rejectWithValue({ message: "Please enter contributor's account" })
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
