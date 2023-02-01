import { Input, Button, Row, Col, Select, List } from 'antd';
import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './TodoListWithDesign.css';

const TodoListWithDesign = () => {

	const [newColumnName, setNewColumnName] = useState<string>("");
	const [newItemName, setNewItemName] = useState<string>("");
	const [categoryList, setCategoryList] = useState<Category[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [itemList, setItemList] = useState<Item[]>([]);

	interface Category {
		id: string;
		name: string;
	}
	interface Item {
		id: string;
		name: string;
		categoryId: string;
	}

	const handleOnChangeNewColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {

		setNewColumnName(e.target.value);
	}

	const handleOnChangeNewItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItemName(e.target.value);
	}

	const handleOnClickNewColumn = () => {
		if (newColumnName.length > 0) {
			setCategoryList([...categoryList, { id: crypto.randomUUID(), name: newColumnName }]);
			setNewColumnName("");
		}
	}

	const handleOnChangeSelectedCategory = (categoryID: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCategory(categoryID.toString());
	}

	const handleOnClickAddItem = () => {
		setItemList([...itemList, {
			id: crypto.randomUUID(),
			name: newItemName,
			categoryId: selectedCategory
		}]);
		setNewItemName("");
	}

	const handleOnClickDeleteItem = (deletedID: string) => {
		setItemList(itemList.filter((item) => item.id !== deletedID))
	}

	return <div>
		<Row className="row">
			<Col span={22} className="col">
				<Input onChange={handleOnChangeNewColumnName} value={newColumnName} className="input"></Input>
			</Col>
			<Col span={2} className="alignRight col ">
				<Button
					disabled={!(newColumnName.length > 0)}
					onClick={handleOnClickNewColumn}
					className="input"
				>Add Column</Button>
			</Col>
		</Row>
		<Row className="row">
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

		{categoryList.map((category) => {
			return <List
				bordered
				key={category.id}
				header={<div>{category.name}</div>}
				dataSource={
					itemList.filter((item) => {
						return item.categoryId === category.id
					})}
				className="list"
				renderItem={(item) => (
					<List.Item className="listItem">
						<span>{item.name}</span>
						<Button
							danger
							type="primary"
							onClick={() => handleOnClickDeleteItem(item.id)}
						>
							<CloseOutlined />
						</Button>
					</List.Item>
				)}
			>
			</List>
		})}
	</div>;
};

export default TodoListWithDesign;
