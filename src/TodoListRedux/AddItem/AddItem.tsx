import React, {useState} from 'react';

import { Col, Row, Input, Button, Select } from 'antd';
import {CategoryInterface, ItemInterface, AddNewItemToList} from '../TodoListReduxSlice';

import {useDispatch, useSelector} from 'react-redux';


const AddItem = () => {

	const [newItemName, setNewItemName] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	
	const dispatch = useDispatch();
	
	const categoryList = useSelector((state: any) => state.TodoList.categoryList);
	
	const handleOnChangeNewItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItemName(e.target.value);
	}
	
	const handleOnChangeSelectedCategory = (categoryID: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCategory(categoryID.toString());
	}
	
	const handleOnClickAddItem = () => {
		const item:ItemInterface = {id: crypto.randomUUID(), name: newItemName, categoryId: selectedCategory}
		dispatch(AddNewItemToList(item));
		setNewItemName("");
	}

	return <Row className="row">
		<Col span={16} className="col">
			<Input onChange={handleOnChangeNewItemName} value={newItemName} className="input"></Input>
		</Col>
		<Col span={6} className="col">
			<Select
        className="input"
        // defaultValue={"test"}
        options={categoryList.map((category: CategoryInterface) => {
            return { value: category.id, label: category.name };
        })}
        onChange={handleOnChangeSelectedCategory}>
    </Select>
		</Col>
		<Col span={2} className="alignRight col">
			<Button
				disabled={newItemName === "" || selectedCategory === ""}
				onClick={handleOnClickAddItem}
			>Add Item</Button>
		</Col>
	</Row>
}

export default AddItem;