import React, { useState, useEffect } from 'react';

import { Modal, Input } from 'antd';

import { HideColumnModal, UpdateNewColumnName } from '../TodoListReduxSlice';
import { useSelector, useDispatch } from 'react-redux';

const ColumnModal = () => {

	const column = useSelector((state: any) => state.TodoList.editingColumn);

	const [editedColumnName, setEditedColumnName] = useState<string>(column.name);
	const [error, setError] = useState<boolean>(false);

	const columnModalVisible = useSelector((state: any) => state.TodoList.columnModalVisible);

	const dispatch = useDispatch();

	useEffect(() => {
		setEditedColumnName(column.name);
		setError(false);
	}, [column])

	const handleOnChangeEditedColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedColumnName(e.target.value);
	}

	const handleModalOnOK = () => {
		if (editedColumnName.length === 0) {
			setError(true);
		} else {
			dispatch(UpdateNewColumnName({ name: editedColumnName, id: column.id }));
			dispatch(HideColumnModal());
		}
	}

	const handleModalOnCancel = () => {
		dispatch(HideColumnModal());
	}

	return <Modal
		title={"Changer le nom de : " + column.name}
		open={columnModalVisible}
		onOk={handleModalOnOK}
		onCancel={handleModalOnCancel}
	>
		Nom:
		<Input onChange={handleOnChangeEditedColumnName} value={editedColumnName} className="input"></Input>
		<p hidden={!error}>Erreur, nom vide?</p>
	</Modal>

}

export default ColumnModal;