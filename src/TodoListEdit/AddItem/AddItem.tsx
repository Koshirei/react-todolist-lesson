import React from 'react';

import { Col, Row, Input, Button } from 'antd';


interface AddItemInterface {
	handleOnChangeNewItemName: (e: React.ChangeEvent<HTMLInputElement>) => void,
	newItemName: string,
	selectedCategory: string,
	handleOnClickAddItem: () => void,
	baliseCategorySelector: JSX.Element
}

const AddItem = ({
	handleOnChangeNewItemName,
	newItemName,
	selectedCategory,
	handleOnClickAddItem,
	baliseCategorySelector
}: AddItemInterface) => {


	return <Row className="row">
		<Col span={16} className="col">
			<Input onChange={handleOnChangeNewItemName} value={newItemName} className="input"></Input>
		</Col>
		<Col span={6} className="col">
			{baliseCategorySelector}
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