import { API } from "../@libs/axios"
import { IProductBrand } from "../@libs/types";

const _ENDPOINT = '/brands';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: IProductBrand) => (API.post(_ENDPOINT, data));
const update = (id: string, data: IProductBrand) => (API.put(`${_ENDPOINT}/${id}`, data));


export const ProductBrandService = {
  getAll,
  getById,
  create,
  update,
  remove,
}