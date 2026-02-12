import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    const { username, password } = data

    // 🔐 Hardcoded Credentials
    const ADMIN_USER = "ADMIN_USER"
    const ADMIN_PASSWORD = "Love@2026#Secure"

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      return { username }
    } else {
      return rejectWithValue("Invalid username or password")
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, error: null },
  reducers: {
    logout(state) {
      state.user = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
