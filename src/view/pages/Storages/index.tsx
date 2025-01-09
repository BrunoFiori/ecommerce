import React from "react";
import { useQuery } from "react-query";
import { IStorageDto } from "../../../app/interfaces/storage";
import { getStorages } from "../../../app/services/storageService";
import StorageCard from "../components/StorageCard";
import StorageModal from "../components/StorageModal";

const fetchStorages = async () => {
  return await getStorages();
};

const Storages: React.FC = () => {
  const { data, error, isLoading } = useQuery("storages", fetchStorages);
  const [storageEdit, setStorageEdit] = React.useState<IStorageDto | undefined>(
    undefined
  );
  const [modalOpen, setModalOpen] = React.useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading storages</div>;

  const handleOnEdit = (id: string) => {
    if (!data) return;
    const storage = data.find((storage) => storage.id === id);
    if (!storage) return;
    setStorageEdit(storage);
    setModalOpen(true);
  };

  const handleOnClose = () => {
    setStorageEdit(undefined);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Storages</h1>
      <div className="flex justify-center">
        {data &&
          data.map((storage: IStorageDto) => (
            <StorageCard
              key={storage.id}
              storage={storage}
              onEdit={handleOnEdit}
            />
          ))}
        <StorageModal isOpen={modalOpen} onClose={handleOnClose} storage={storageEdit}/>
      </div>
    </div>
  );
};

export default Storages;
