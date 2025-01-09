export interface IGrantItemsDto {
  storageId: string;
  catalogItemId: string;
  quantity: number;
}
export interface IStorageItemDto {
  id: string;
  catalogItemId: string;
  name: string;
  description: string;
  quantity: number;
  acquiredDate: Date;
}
