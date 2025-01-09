import axiosCustomInstance from "../config/axiosConfig";
import { ICatalogItemDto } from "../interfaces/catalog";

const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_BASE_URL_CATALOG}Items`;

export const getCatalogItems = async (): Promise<ICatalogItemDto[]> => {
  try {
    const response =
      await axiosCustomInstance.get<ICatalogItemDto[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching storage items: ${error}`);
  }
};
