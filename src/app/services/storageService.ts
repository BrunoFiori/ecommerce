import axiosCustomInstance from "../config/axiosConfig";
import {
  ICreateStorageDto,
  IStorageDto,
  IUpdateStorageDto,
} from "../interfaces/storage";

const API_URL = `${import.meta.env.VITE_REACT_APP_URLBASE_STORAGE}storage`;

export const getStorages = async (): Promise<IStorageDto[]> => {
  const response = await axiosCustomInstance.get<IStorageDto[]>(API_URL);
  return response.data;
};

export const createStorage = async (storageData: ICreateStorageDto) => {
  const response = await axiosCustomInstance.post(API_URL, storageData);
  return response.data;
};

export const getStorageById = async (id: string): Promise<IStorageDto> => {
  const response = await axiosCustomInstance.get<IStorageDto>(
    `${API_URL}/${id}`
  );
  return response.data;
};

export const updateStorage = async (
  id: string,
  storageData: IUpdateStorageDto
) => {
  const response = await axiosCustomInstance.put(
    `${API_URL}/${id}`,
    storageData
  );
  return response.data;
};

export const deleteStorage = async (id: string) => {
  const response = await axiosCustomInstance.delete(`${API_URL}/${id}`);
  return response.data;
};
