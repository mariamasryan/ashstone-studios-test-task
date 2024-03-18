import * as selectors from "./selectors";
import postsSlice from "./postsSlice";

export const postSelectors = {
   ...selectors
}
export const postActions = {
   ...postsSlice.actions
}