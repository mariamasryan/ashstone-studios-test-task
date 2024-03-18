import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("posts/getPosts", async () => {
    const response = await fetch("https://cloud.codesupply.co/endpoint/react/data.json", {
      method: "GET",
    });
    return response.json();
  });