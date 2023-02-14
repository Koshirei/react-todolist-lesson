import React from 'react';

import { List } from 'antd';

import Header from './Header';
import Item from './Item';

import { CategoryInterface, ItemInterface } from "../TodoListEdit";


interface ColumnInterface {
	categoryList: CategoryInterface[],
	itemList: ItemInterface[],
	handleOnClickDeleteItem: (deletedID: string) => void,
	handleOnClickDeletedCategory: (deletedID: string) => void,
	handleShowColumnModal: (category: CategoryInterface) => void
	handleShowItemModal : (item: ItemInterface) => void
}

const Column = ({
	categoryList,
	itemList,
	handleOnClickDeleteItem,
	handleOnClickDeletedCategory,
	handleShowColumnModal,
	handleShowItemModal
}: ColumnInterface) => {

	return <>

		{categoryList.map((category) => {
			return <List
				bordered
				key={category.id}
				header={
					<Header
						category={category}
						handleOnClickDeletedCategory={handleOnClickDeletedCategory}
						handleShowColumnModal={handleShowColumnModal}
					/>
				}
				dataSource={
					itemList.filter((item) => {
						return item.categoryId === category.id
					})}
				className="list"
				renderItem={(item) => (
					<Item
						item={item}
						handleOnClickDeleteItem={handleOnClickDeleteItem}
						handleShowItemModal={handleShowItemModal}
					/>
				)}
			>
			</List>
		})}

	</>
}

export default Column;