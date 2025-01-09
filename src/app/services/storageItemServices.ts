import axiosCustomInstance from "../config/axiosConfig";
import { IGrantItemsDto, IStorageItemDto } from "../interfaces/storageItem";

const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_URLBASE_STORAGE}storageitem`;

export const getStorageItems = async (
  storageId: string
): Promise<IStorageItemDto[]> => {
  if (!storageId) {
    throw new Error("Storage ID cannot be empty");
  }

  try {
    const response = await axiosCustomInstance.get<IStorageItemDto[]>(
      `${API_BASE_URL}?storageId=${storageId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching storage items: ${error}`);
  }
};

async function grantItemsAsync(grantItemsDto: IGrantItemsDto): Promise<void> {
  try {
    await axiosCustomInstance.post(API_BASE_URL, grantItemsDto);
  } catch (error) {
    throw new Error(`Error granting items: ${error}`);
  }
}

export { grantItemsAsync };
