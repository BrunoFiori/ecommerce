import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { TextFieldType } from "../../../../app/enum/TextField";
import { ICatalogItemDto } from "../../../../app/interfaces/catalog";
import { IStorageDto } from "../../../../app/interfaces/storage";
import {
  IGrantItemsDto,
  IStorageItemDto,
} from "../../../../app/interfaces/storageItem";
import { getCatalogItems } from "../../../../app/services/catalogItemServices";
import {
  getStorageItems,
  grantItemsAsync,
} from "../../../../app/services/storageItemServices";
import Icon from "../../../components/Icon";
import Modal from "../../../components/Modal";
import Popper from "../../../components/Popper";
import Select from "../../../components/Select";
import TextField from "../../../components/TextField";

interface StorageModalProps {
  storage: IStorageDto | undefined;
  onClose: () => void;
  isOpen: boolean;
}

const StorageModal: React.FC<StorageModalProps> = ({
  storage,
  onClose,
  isOpen,
}) => {
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const queryClient = useQueryClient();
  const [storageItemsState, setStorageItemsState] = useState<IStorageItemDto[]>(
    []
  );
  const [catalogItemsState, setCatalogItemsState] = useState<ICatalogItemDto[]>(
    []
  );

  const { error: storageError, isLoading: storageLoading } = useQuery(
    "storageItems",
    () => getStorageItems(storage!.id),
    {
      enabled: !!storage,
      onSuccess: (data) => {
        setStorageItemsState(data);
      },
    }
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popperOpen = Boolean(anchorEl);

  useQuery("catalogItems", getCatalogItems, {
    enabled: popperOpen,
    onSuccess: (data) => {
      setCatalogItemsState(data);
    },
  });

  const { mutate: linkNewCatalogItem } = useMutation(grantItemsAsync, {
    onSuccess: () => {
      console.log("Item linked successfully");
      queryClient.invalidateQueries("storageItems");
    },
  });

  const handlePopperClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setSelectedCatalogItem("");
    setCatalogItemsState([]);
    setQuantity(1);
    setAnchorEl(null);
  };

  const handleLinkNewCatalogItem = () => {
    if (selectedCatalogItem && quantity > 0) {
      const grantItemsDto: IGrantItemsDto = {
        storageId: storage!.id,
        catalogItemId: selectedCatalogItem,
        quantity,
      };
      linkNewCatalogItem(grantItemsDto);
      handleClickAway();
    }
  };

  if (!storage) return null;

  if (storageLoading) return <div>Loading...</div>;
  if (storageError) return <div>Error loading storage items</div>;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-8">
          <TextField
            label="Name"
            value={storage?.name}
            onChange={() => {}}
            disabled
          />
          <TextField
            label="Description"
            value={storage?.description}
            onChange={() => {}}
            multiline
            disabled
          />
          <div>
            <div className="flex gap-4 items-center">
              <h3>Related Items</h3>
              <Icon
                icon="add"
                popupTitle="Bind new catalog Item"
                onClick={handlePopperClick}
              />
            </div>
            <div>
              {storageItemsState?.map((item) => (
                <li key={item.id}>
                  {item.name} ({item.quantity} Uns).
                </li>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      <Popper
        id="popperNewCatalogItem"
        open={popperOpen}
        anchorEl={anchorEl}
        handleClickAway={handleClickAway}
      >
        <div className="flex gap-8 p-8 items-center">
          <Select
            value={selectedCatalogItem}
            onChange={(e) => setSelectedCatalogItem(e.target.value as string)}
            options={catalogItemsState.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            label="Catalog Item"
            name="catalogItem"
            fullwidth
          />
          <TextField
            name="quantity"
            type={TextFieldType.Number}
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Icon icon="add_circle" onClick={handleLinkNewCatalogItem} />
          <Icon icon="cancel" onClick={handleClickAway} secundary />
        </div>
      </Popper>
    </>
  );
};

export default StorageModal;
