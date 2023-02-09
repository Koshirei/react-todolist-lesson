import React, {useState, useEffect} from 'react';

import {Modal, Input} from 'antd';

import {CategoryInterface} from '../TodoListEdit';

interface ColumnModalInterface{
	columnModalVisible: boolean,
	handleHideColumnModal: () => void,
	category: CategoryInterface,
	handleUpdateNewColumnName: (updatedCategory: CategoryInterface) => void
}

const ColumnModal = ({
	columnModalVisible,
	handleHideColumnModal,
	category,
	handleUpdateNewColumnName
}:ColumnModalInterface) => {

const [editedColumnName, setEditedColumnName] = useState<string>(category.name);
const [error, setError] = useState<boolean>(false);

useEffect(()=>{
	setEditedColumnName(category.name);
	setError(false);
},[category])

const handleOnChangeEditedColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
	setEditedColumnName(e.target.value);
}

const handleModalOnOK = () => {
	if (editedColumnName.length === 0) {
		setError(true);
	} else {
		handleUpdateNewColumnName({name: editedColumnName, id: category.id});
		handleHideColumnModal();
	}
}

return <Modal
        title={"Changer le nom de" + category.name}
        open={columnModalVisible}
        onOk={handleModalOnOK}
        onCancel={handleHideColumnModal}
      >
        <Input onChange={handleOnChangeEditedColumnName} value={editedColumnName} className="input"></Input>
      	<p hidden={!error}>Erreur, nom vide?</p>
		</Modal>

}

export default ColumnModal;