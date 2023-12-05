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
const deleteItem = async (id) => {
  try {
      await axios.delete(`${apiURL}/items/${id}`)
      console.log('deleted item')
  } catch(error) {
      console.log(error.message)
  }
}

export default { createItem, deleteItem };
