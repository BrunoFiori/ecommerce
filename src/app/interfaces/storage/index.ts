import { IStorageItemDto } from "../storageItem";

export interface ICreateStorageDto {
  name: string;
  description: string;
}

export interface IUpdateStorageDto {
  id: string; // Guid
  name: string;
  description: string;
}

export interface IDeleteStorageDto {
  id: string; // Guid
}

export interface IStorageDto {
  id: string; // Guid
  name: string;
  description: string;
  items?: IStorageItemDto[];
}
