import ProductProps from 'types/ProductProps';
import axiosClient from './axiosClient';

const productApi = {
  getAll(params: any): any {
    const url = '/photos';
    return axiosClient.get<ProductProps[]>(url, { params });
  },

  get(id: string) {
    const url = `/photos/${id}`;
    return axiosClient.get(url);
  },

  add(data: ProductProps): any {
    const url = '/photos';
    return axiosClient.post(url, data);
  },

  update(data: ProductProps): any {
    const url = `/photos/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string) {
    const url = `/photos/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
