import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularPosts, fetchPost } from "./operations";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPopularPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default postsSlice.reducer;
