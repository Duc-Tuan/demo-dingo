import * as httpRequest from "../utils/httpRequest";

export const product = async () => {
  try {
    const res = await httpRequest.get("products");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const categores = async () => {
  try {
    const res = await httpRequest.get("categores");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (
  category,
  name,
  describe,
  outstanding,
  content,
  author,
  price,
  imgSrc
) => {
  try {
    const res = await httpRequest.postProduct("products", {
      category,
      name,
      describe,
      outstanding,
      content,
      author,
      price,
      imgSrc,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
