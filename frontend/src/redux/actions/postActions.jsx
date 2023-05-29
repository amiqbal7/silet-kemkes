import axios from "axios";
import { setPosts } from "../reducers/postReducers";

// Function to get all the posts
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/silet_kemkes");
    dispatch(setPosts(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response.data.message);
      return;
    }
    console.error(error.message);
  }
};
