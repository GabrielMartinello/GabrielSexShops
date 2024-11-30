import { API } from "../@libs/axios"
import { IUser } from "../@libs/types";
const _ENDPOINT = '/users';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IUser) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IUser) => (API.put(`${_ENDPOINT}/${id}`, data));

export const UserService = {
  getAll,
  getById,
  create,
  update,
  remove
}