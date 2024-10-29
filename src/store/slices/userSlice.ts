import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { _get } from "../../utils/api";

interface initialStateType {
  data: {
    username: string;
    role: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk("user/api", async () => {
  const result: { data: { username: string; role: string } } = await _get("");
  return result.data;
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserData.fulfilled,
      (state, action: PayloadAction<{ username: string; role: string }>) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.error.message || null;
    });
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;