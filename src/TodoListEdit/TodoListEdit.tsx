import React, { useState } from 'react';
import './TodoListEdit.css';

import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import CategorySelector from './CategorySelector';

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

	const emptyCateg: CategoryInterface = { id: "", name: "" };
	const emptyItem: ItemInterface = { id: "", name: "", categoryId: "" }

	const [newColumnName, setNewColumnName] = useState<string>("");
	const [newItemName, setNewItemName] = useState<string>("");

	const [selectedCategory, setSelectedCategory] = useState<string>("");

	const [categoryList, setCategoryList] = useState<CategoryInterface[]>([]);
	const [itemList, setItemList] = useState<ItemInterface[]>([]);

	const [columnModalVisible, setColumnModalVisible] = useState<boolean>(false);
	const [itemModalVisible, setItemModalVisible] = useState<boolean>(false);

	const [currentEditingCategory, setCurrentEditingCategory] = useState<CategoryInterface>(emptyCateg);
	const [currentEditingItem, setCurrentEditingItem] = useState<ItemInterface>(emptyItem);

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

	const handleShowItemModal = (item: ItemInterface) => {
		setCurrentEditingItem(item);
		setItemModalVisible(true);
	}

	const handleHideItemModal = () => {
		setItemModalVisible(false);
	}

	const handleUpdateNewColumnName = (updatedCategory: CategoryInterface) => {
		setCategoryList(
			categoryList.map((category) => {
				if (category.id === updatedCategory.id) {
					category.name = updatedCategory.name
				}
				return category;
			})
		)
	}

	const handleUpdateNewItemData = (updatedItem: ItemInterface) => {
		setItemList(
			itemList.map((item) => {
				if (item.id === updatedItem.id) {
					item.name = updatedItem.name;
					item.categoryId = updatedItem.categoryId;
				}
				return item;
			})
		);
	}

	const handleOnClickDeleteItem = (deletedID: string) => {
		setItemList(itemList.filter((item) => item.id !== deletedID))
	}

	const handleOnClickDeletedCategory = (deletedID: string) => {
		setItemList(itemList.filter((item) => item.categoryId !== deletedID));
		setCategoryList(categoryList.filter((category) => category.id !== deletedID));
		// setSelectedCategory("");
	}

	//variable cursed lol
	let baliseCategorySelector : JSX.Element =
		<CategorySelector
			categoryList={categoryList}
			handleOnChangeSelectedCategory={handleOnChangeSelectedCategory}
		/> 

	return <div>

		<AddColumn
			handleOnChangeNewColumnName={handleOnChangeNewColumnName}
			newColumnName={newColumnName}
			handleOnClickNewColumn={handleOnClickNewColumn}
		/>

		<AddItem
			handleOnChangeNewItemName={handleOnChangeNewItemName}
			newItemName={newItemName}
			selectedCategory={selectedCategory}
			handleOnClickAddItem={handleOnClickAddItem}
			baliseCategorySelector={baliseCategorySelector}
		/>

		<Column
			categoryList={categoryList}
			itemList={itemList}
			handleOnClickDeleteItem={handleOnClickDeleteItem}
			handleOnClickDeletedCategory={handleOnClickDeletedCategory}
			handleShowColumnModal={handleShowColumnModal}
			handleShowItemModal={handleShowItemModal}
		/>

		<ColumnModal
			category={currentEditingCategory}
			columnModalVisible={columnModalVisible}
			handleHideColumnModal={handleHideColumnModal}
			handleUpdateNewColumnName={handleUpdateNewColumnName}
		/>

		<ItemModal
			item={currentEditingItem}
			itemModalVisible={itemModalVisible}
			handleHideItemModal={handleHideItemModal}
			handleUpdateNewItemData={handleUpdateNewItemData}
			baliseCategorySelector={baliseCategorySelector}
			selectedCategory={selectedCategory}
		/>
	</div>;
};

export default TodoListEdit;
