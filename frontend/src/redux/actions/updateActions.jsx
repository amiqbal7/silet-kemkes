import axios from "axios";
import { setUpdate } from '../reducers/updateReducers';

// Function to update the peserta_lulus data
export const getUpdate = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:4000/peserta_lulus/:id`, data);
    dispatch(setUpdate(response.data));
    console.log("Data updated successfully");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response.data.message);
    } else {
      console.error(error.message);
    }
  }
};
