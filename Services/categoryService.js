import * as httpRequest from '../utils/httpRequest';

export const categores = async () => {
  try {
    const res = await httpRequest.get('categores');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};