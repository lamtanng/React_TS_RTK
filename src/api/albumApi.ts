import axiosClient from './axiosClient';
import AlbumProps from 'types/AlbumProps';

const albumApi = {
  getAll(params?: any): any {
    const url = '/albums';
    return axiosClient.get<AlbumProps[]>(url, { params });
  },

  get(id: number) {
    const url = `/albums/${id}`;
    return axiosClient.get(url);
  },

  add(data: AlbumProps) {
    const url = '/albums';
    return axiosClient.post(url, data);
  },

  update(data: AlbumProps) {
    const url = `/albums/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: number) {
    const url = `/albums/${id}`;
    return axiosClient.delete(url);
  },
};

export default albumApi;
