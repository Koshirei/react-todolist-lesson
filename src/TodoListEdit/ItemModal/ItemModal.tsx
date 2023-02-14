import React, { useState, useEffect } from 'react';

import { Modal, Input } from 'antd';

import { ItemInterface } from '../TodoListEdit';

interface ItemModalInterface {
    item: ItemInterface,
    itemModalVisible: boolean,
    handleHideItemModal: () => void,
    handleUpdateNewItemData: (updatedItem: ItemInterface) => void,
    baliseCategorySelector: JSX.Element,
    selectedCategory: string,
}

const ItemModal = ({
    item,
    itemModalVisible,
    handleHideItemModal,
    handleUpdateNewItemData,
    baliseCategorySelector,
    selectedCategory
}: ItemModalInterface) => {

    const [editedItemName, setEditedItemName] = useState<string>(item.name);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
		setEditedItemName(item.name);
		setError(false);
	}, [item])

    const handleOnChangeEditedItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedItemName(e.target.value);
    }

    const handleModalOnOk = () => {
        if (editedItemName.length === 0) {
			setError(true);
		} else {
			handleUpdateNewItemData({ name: editedItemName, id: item.id, categoryId: selectedCategory });
			handleHideItemModal();
		}
    }

    return <Modal
        title={"Changer la data de " + item.name}
        open={itemModalVisible}
        onOk={handleModalOnOk}
        onCancel={handleHideItemModal}
    >
        Nom:
        <Input onChange={handleOnChangeEditedItemName} value={editedItemName} className="input"></Input>
        <br/><br/>Category: (un peu buggé mais ça marche)
        {baliseCategorySelector}
        <p hidden={!error}>Erreur, nom vide?</p>
    </Modal>
}

export default ItemModal;