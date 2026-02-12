import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/login', data)
      return res.data.user
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login failed')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, error: null },
  reducers: {
    logout(state){
      state.user = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action)=>{
        state.user = action.payload
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action)=>{
        state.error = action.payload
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
