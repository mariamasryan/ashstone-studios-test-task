import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";
import { v4 as uuidv4 } from "uuid";
import arrowIcon from "../assets/icons/arrow.png";
import arrowRightIcon from "../assets/icons/arrowRight.png";


const initialState = {
    posts: [],
    loading: false,
    errors: null,
    menu: [
      {
        id: uuidv4(),
        name: "Demos",
        img: arrowIcon
      },
      {
        id: uuidv4(),
        name: "Posts",
        img: arrowIcon
      },
      {
        id: uuidv4(),
        name: "Features",
        img: arrowIcon
      },
      {
        id: uuidv4(),
        name: "Categories",
        img: arrowIcon
      },
      {
        id: uuidv4(),
        name: "Shop",
        img: arrowIcon
      },
      {
        id: uuidv4(),
        name: "Buy Now"
      }
    ],
    submenu: [
      {
        id: uuidv4(),
        name: "Post Header",
        img: arrowRightIcon
      },
      {
        id: uuidv4(),
        name: "Post Layout",
        img: arrowRightIcon
      },
      {
        id: uuidv4(),
        name: "Share Buttons",
        img: arrowRightIcon
      },
      {
        id: uuidv4(),
        name: "Gallery Post",
        img: arrowRightIcon
      },
      {
        id: uuidv4(),
        name: "Video Post",
        img: arrowRightIcon
      }
    ]
}

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //
  },

  extraReducers(builder) {
    // GET POST's DATA
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error.message;
    });
  },
});

export default PostsSlice.reducer
