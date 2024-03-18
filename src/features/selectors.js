import { createSelector } from "reselect";

// SELECT POST'S DATA
const postsSelector = (state) => state.posts;
export const selectPostsData = createSelector(
  postsSelector,
  (posts) => posts.posts
);
// SELECT POST'S LOADING
const postsLoadingSelector = (state) => state.posts;
export const selectPostsLoading = createSelector(
  postsLoadingSelector,
  (posts) => posts.loading
);
// SELECT POST'S ERROR
const postsErrorSelector = (state) => state.posts;
export const selectPostsError = createSelector(
  postsErrorSelector,
  (posts) => posts.errors
);
// SELECT MENU DATA
const menuSelector = (state) => state.posts;
export const selectMenuData = createSelector(
  menuSelector,
  (posts) => posts.menu
);
// SELECT SUBMENU DATA
const submenuSelector = (state) => state.posts;
export const selectSubmenuData = createSelector(
  submenuSelector,
  (posts) => posts.submenu
);

