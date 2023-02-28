import React from 'react';

import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import { List, Button } from 'antd';

import { ItemInterface, DeleteItemById, ShowItemModal } from "../../TodoListReduxSlice";

import {useDispatch} from "react-redux";

interface ItemComponentInterface {
	item: ItemInterface
}

const Item = ({
	item
}: ItemComponentInterface) => {

	const dispatch = useDispatch();
	
	const handleOnClickDeleteItem = () => {
		dispatch(DeleteItemById(item.id));
	}

	const handleOnClickEditItem = () => {
		dispatch(ShowItemModal(item))
	}
	
	return <List.Item className="listItem main">
		<span>{item.name}</span>

		<span>
			<Button
				type="primary"
				onClick={handleOnClickEditItem}
			>
				<SettingOutlined />
			</Button>
			<Button
				danger
				type="primary"
				onClick={handleOnClickDeleteItem}
			>
				<CloseOutlined />
			</Button>
		</span>
	</List.Item>
}

export default Item;