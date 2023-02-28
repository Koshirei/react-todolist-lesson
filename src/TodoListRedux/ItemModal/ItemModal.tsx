import React, { useState, useEffect } from 'react';

import { Modal, Input } from 'antd';

import { HideItemModal, UpdateNewItemName } from '../TodoListReduxSlice';
import { useSelector, useDispatch } from 'react-redux';

const ItemModal = () => {

    const item = useSelector((state: any) => state.TodoList.editingItem);
    const itemModalVisible = useSelector((state: any) => state.TodoList.itemModalVisible);

    const dispatch = useDispatch();

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
			dispatch(UpdateNewItemName({ name: editedItemName, id: item.id }));
			dispatch(HideItemModal());
		}
    }

    const handleModalOnCancel = () => {
		dispatch(HideItemModal());
	}

    return <Modal
        title={"Changer la data de " + item.name}
        open={itemModalVisible}
        onOk={handleModalOnOk}
        onCancel={handleModalOnCancel}
    >
        Nom:
        <Input onChange={handleOnChangeEditedItemName} value={editedItemName} className="input"></Input>
        <p hidden={!error}>Erreur, nom vide?</p>
    </Modal>
}

export default ItemModal;