import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {List, Button} from 'antd';

import {ItemInterface} from "../../TodoListEdit";

interface ItemComponentInterface{
	item: ItemInterface,
	handleOnClickDeleteItem: (id:string) => void
}

const Item = ({
	item,
	handleOnClickDeleteItem
}: ItemComponentInterface ) => {


return <List.Item className="listItem">
						<span>{item.name}</span>
						<Button
							danger
							type="primary"
							onClick={() => handleOnClickDeleteItem(item.id)}
						>
							<CloseOutlined />
						</Button>
					</List.Item>
}

export default Item;