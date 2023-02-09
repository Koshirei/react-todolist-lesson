import { Input, Button, Row, Col, Select, List } from 'antd';
import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './TodoListEdit.css';

import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';

export interface CategoryInterface {
		id: string;
		name: string;
}
	
export interface ItemInterface {
	id: string;
	name: string;
	categoryId: string;
}

const TodoListEdit = () => {

	const emptyCateg: CategoryInterface = {id: "", name: ""}; 

	const [newColumnName, setNewColumnName] = useState<string>("");
	const [newItemName, setNewItemName] = useState<string>("");
	
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	
	const [categoryList, setCategoryList] = useState<CategoryInterface[]>([]);
	const [itemList, setItemList] = useState<ItemInterface[]>([]);
	
	const [columnModalVisible, setColumnModalVisible] = useState<boolean>(false);
	const [itemModalVisible, setItemModalVisible] = useState<boolean>(false);
	
	const [currentEditingCategory, setCurrentEditingCategory] = useState<CategoryInterface>(emptyCateg);
	
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
	
	const handleShowColumnModal = (category: CategoryInterface) => {
		setCurrentEditingCategory(category);
		setColumnModalVisible(true);
	}
	
	const handleHideColumnModal = () => {
		setColumnModalVisible(false);
	}
	
	const handleUpdateNewColumnName = ( updatedCategory: Category ) => {
		setCategoryList(
			categoryList.map((category)=>{
				if (category.id === updatedCategory.id){
					category.name = updatedCategory.name
				}
				return category;
			})
		)
	}

	const handleOnClickDeleteItem = (deletedID: string) => {
		setItemList(itemList.filter((item) => item.id !== deletedID))
	}
	
	const handleOnClickDeletedCategory = (deletedID: string) => {
		setItemList(itemList.filter((item) => item.categoryId !== deletedID));
		setCategoryList(categoryList.filter((category) => category.id !== deletedID));
		setSelectedCategory("");
	}

	return <div>
		
		<AddColumn
			handleOnChangeNewColumnName={handleOnChangeNewColumnName}
			newColumnName={newColumnName}
			handleOnClickNewColumn={handleOnClickNewColumn}
		/>
		
		<AddItem
			handleOnChangeNewItemName={handleOnChangeNewItemName}
			newItemName={newItemName}
			handleOnChangeSelectedCategory={handleOnChangeSelectedCategory}
			selectedCategory={selectedCategory}
			handleOnClickAddItem={handleOnClickAddItem}
			categoryList={categoryList}
		
		/>
		
		<Column
			categoryList={categoryList}
			itemList={itemList}
			handleOnClickDeleteItem={handleOnClickDeleteItem}
			handleOnClickDeletedCategory={handleOnClickDeletedCategory}
			handleShowColumnModal={handleShowColumnModal}
		/>
		
		<ColumnModal
			category={currentEditingCategory}
			columnModalVisible={columnModalVisible}
			handleHideColumnModal={handleHideColumnModal}
			handleUpdateNewColumnName={handleUpdateNewColumnName}
		/>

	</div>;
};

export default TodoListEdit;
