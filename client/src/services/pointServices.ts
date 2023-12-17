import axios from "axios";

export const getUser = async (userId: string) => {
  try {
    await axios.get(`/point/${userId}`, {
      params: {
        id: userId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    await axios.get("/points");
  } catch (error) {
    console.error(error);
  }
};
