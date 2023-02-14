import React from 'react';

import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import { List, Button } from 'antd';

import { ItemInterface } from "../../TodoListEdit";

interface ItemComponentInterface {
	item: ItemInterface,
	handleOnClickDeleteItem: (id: string) => void
	handleShowItemModal: (item: ItemInterface) => void
}

const Item = ({
	item,
	handleOnClickDeleteItem,
	handleShowItemModal
}: ItemComponentInterface) => {


	return <List.Item className="listItem main">
		<span>{item.name}</span>

		<span>
			<Button
				type="primary"
				onClick={() => handleShowItemModal(item)}
			>
				<SettingOutlined />
			</Button>
			<Button
				danger
				type="primary"
				onClick={() => handleOnClickDeleteItem(item.id)}
			>
				<CloseOutlined />
			</Button>
		</span>
	</List.Item>
}

export default Item;