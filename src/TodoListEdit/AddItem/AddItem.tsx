import React from 'react';
import { Col, Row, Input, Button, Select } from 'antd';
import {CategoryInterface} from '../TodoListEdit';

interface AddItemInterface {
	handleOnChangeNewItemName : (e: React.ChangeEvent<HTMLInputElement>) => void,
	newItemName : string,
	handleOnChangeSelectedCategory : (categoryID: React.ChangeEvent<HTMLInputElement>) => void,
	selectedCategory : string,
	handleOnClickAddItem : () => void,
	categoryList: CategoryInterface[]
} 
	
const AddItem = ({
	handleOnChangeNewItemName,
	newItemName,
	handleOnChangeSelectedCategory,
	selectedCategory,
	handleOnClickAddItem,
	categoryList
}:AddItemInterface) => {


return <Row className="row">
			<Col span={16} className="col">
				<Input onChange={handleOnChangeNewItemName} value={newItemName} className="input"></Input>
			</Col>
			<Col span={6} className="col">
				<Select
					className="input"
					options={categoryList.map((category) => {
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