import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginByEmail = createAsyncThunk('auth/loginByEmail', (params, thunkApi) => {
    try {
        console.log(params, thunkApi);
        return {
            age: 10,
            latname: 'test'
        }
    } catch (err) {
            console.log(err);
    }
}) 
 
const initialState = {
    user: null,
    error: '',
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.user = action.payload
        },
        setError: (state, action) => { 
            state.error = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginByEmail.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
        })
        .addCase(loginByEmail.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        .addCase(loginByEmail.pending, (state) => {
            state.isLoading = true
        })
    }
})


export const authActions = authSlice.actions
export const authReducer = authSlice.reducer