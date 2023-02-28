import React from 'react';

import { List } from 'antd';

import Header from './Header';
import Item from './Item';

import { CategoryInterface, ItemInterface } from '../TodoListReduxSlice';

import { useSelector } from 'react-redux';

const Column = () => {

	const categoryList = useSelector((state: any) => state.TodoList.categoryList);
	const itemList = useSelector((state: any) => state.TodoList.itemList);

	return <>

		{categoryList.map((category: CategoryInterface) => {
			return <List
				bordered
				key={category.id}
				header={
					<Header
						category={category}
					/>
				}
				dataSource={
					itemList.filter((item: ItemInterface) => {
						return item.categoryId === category.id
					})}
				className="list"
				renderItem={(item: ItemInterface) => (
					<Item
						item={item}
					/>
				)}
			>
			</List>
		})}

	</>
}

export default Column;