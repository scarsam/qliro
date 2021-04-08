import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchUsers, IUser } from "../../api/userAPI";

export interface UserState {
  user: IUser | null;
  users: IUser[] | [];
  searchResult: IUser[] | [];
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  users: [],
  searchResult: [],
  loading: false,
};

export const fetchUsersAsync = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetchUsers();
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Search for the users by their firstName
    searchUsers(state, action: PayloadAction<string>) {
      if (!action.payload) {
        state.searchResult = [];
      } else {
        const users = state.users.filter((user) =>
          user.firstName
            .toLowerCase()
            .includes(action.payload.toLocaleLowerCase()),
        );
        state.searchResult = users;
      }
    },
    // Change the primary user for the app
    changeUser(state, action: PayloadAction<number>) {
      const user = state.users.find((user) => user.id === action.payload);
      state.user = user || state.users[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        // Fetch all users and set the first user in the result to the primary user
        state.user = action.payload[0];
        state.users = action.payload;
      });
  },
});
export const { searchUsers, changeUser } = userSlice.actions;

export const selectUserStore = (state: RootState) => state.userState;

export default userSlice.reducer;
