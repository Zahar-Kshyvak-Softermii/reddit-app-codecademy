import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://www.reddit.com";

export const fetchPopularPosts = createAsyncThunk(
  "posts/fetchPopularPosts",
  async () => {
    try {
      const response = await fetch(`${API_URL}/r/popular.json`);

      if (response.ok) {
        const data = await response.json();
        console.log(data.data.children);
        return data.data.children;
      }

      throw new Error("Network response was not ok");
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
);

export const fetchPost = createAsyncThunk("posts/fetchPost", async (name) => {
  try {
    const response = await fetch(`${API_URL}/search.json?q=${name}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data.data.children);
      return data.data.children;
    }

    throw new Error("Network response was not ok");
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
});
