import ToDoProps from 'types/TodoProps';
import axiosClient from './axiosClient';
import { AxiosError, AxiosResponse } from 'axios';

const todoApi = {
  getAll(params: any) {
    const url = '/todos';
    return axiosClient.get(url, { params });
  },

  get(id: string) {
    const url = `/todos/${id}`;
    return axiosClient.get(url);
  },

  add(data: any) {
    const url = '/todos';
    return axiosClient.post(url, data);
  },

  update(data: any) {
    const url = `/todos/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
