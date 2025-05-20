import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === '123456') {
          resolve({
            user: { name: 'User', email },
            token: 'dummy-token-123',
          })
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 1000) // 1 second delay to simulate API
    })
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isLoggedIn = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
