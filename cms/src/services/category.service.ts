import { API } from "../@libs/axios"
import { ICategory } from "../@libs/types";

const _ENDPOINT = '/categories';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ICategory) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ICategory) => (API.put(`${_ENDPOINT}/${id}`, data));


export const CategoryService = {
  getAll,
  getById,
  create,
  update,
  remove,
}