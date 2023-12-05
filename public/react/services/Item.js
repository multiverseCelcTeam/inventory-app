import axios from "axios";

const createItem = async (newItem) => {
  try {
    const response = await axios.post(`${apiURL}/items`, newItem);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default { createItem };
