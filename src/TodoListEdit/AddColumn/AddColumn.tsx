import React from 'react';

import { Col, Row, Input, Button } from 'antd';

interface AddColumnInterface {
	handleOnChangeNewColumnName: (e: React.ChangeEvent<HTMLInputElement>) => void,
	newColumnName: string,
	handleOnClickNewColumn: () => void
}

const AddColumn = ({
	handleOnChangeNewColumnName,
	newColumnName,
	handleOnClickNewColumn
}: AddColumnInterface) => {


	return <Row className="row">
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

}

export default AddColumn;