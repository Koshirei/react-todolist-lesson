import React, { useState } from 'react';

import { Col, Row, Input, Button } from 'antd';
import { CategoryInterface, AddNewCategoryToList } from '../TodoListReduxSlice';

import { useDispatch } from 'react-redux';

const AddColumn = () => {

	const [newColumnName, setNewColumnName] = useState<string>("");

	const dispatch = useDispatch();

	const handleOnChangeNewColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewColumnName(e.target.value);
	}

	const handleOnClickNewColumn = () => {
		const category: CategoryInterface = { id: crypto.randomUUID(), name: newColumnName };

		dispatch(AddNewCategoryToList(category));

		setNewColumnName('');
	}

	return <Row className="row">
		<Col span={22} className="col">
			<Input onChange={handleOnChangeNewColumnName} value={newColumnName} className="input"></Input>
		</Col>
		<Col span={2} className="col">
			<Button
				disabled={!(newColumnName.length > 0)}
				onClick={handleOnClickNewColumn}
				className="input"
			>Add Column</Button>
		</Col>
	</Row>

}

export default AddColumn;