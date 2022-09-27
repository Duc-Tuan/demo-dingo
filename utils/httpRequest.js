import axios from "axios";

const htppRequest = axios.create({
  baseURL: "https://fake-api-ui.herokuapp.com/",
});

export const get = async (path) => {
  const response = await htppRequest.get(path);
  return response.data;
};

export const postProduct = async (path, options = {}) => {
  const response = await htppRequest.post(path, options);
  return response.data;
};

export default htppRequest;