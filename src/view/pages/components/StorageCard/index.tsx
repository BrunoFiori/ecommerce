import React from "react";
import { IStorageDto } from "../../../../app/interfaces/storage";
import Card from "../../../components/Card";
import CardContent from "../../../components/CardContent";
import CardHeader from "../../../components/CardHeader";
import Icon from "../../../components/Icon";

interface StorageCardProps {
  storage: IStorageDto;
  onEdit: (id: string) => void;
}

const StorageCard: React.FC<StorageCardProps> = ({ storage, onEdit }) => {
  return (
    <>
      <Card key={storage.id}>
        <CardHeader>
          <Icon icon="edit" onClick={() => onEdit(storage.id)} />
          <h3 className="text-center m-8">{storage.name}</h3>
        </CardHeader>
        <CardContent>{storage.description}</CardContent>
      </Card>
    </>
  );
};

export default StorageCard;
