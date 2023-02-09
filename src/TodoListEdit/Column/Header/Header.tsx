import React from 'react';
import {CategoryInterface} from "../../TodoListEdit";

import {Button} from 'antd';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';

interface HeaderInterface {
	category: CategoryInterface,
	handleOnClickDeletedCategory : (deletedID : string) => void,
	handleShowColumnModal: (category: CategoryInterface) => void
}

const Header = ({
	category,
	handleOnClickDeletedCategory,
	handleShowColumnModal
}: HeaderInterface) => {


return <div>
		{category.name} 
			<Button
				danger
				type="primary"
				onClick={() => handleOnClickDeletedCategory(category.id)}
				>
				<CloseOutlined />
			</Button>
			
			<Button
				type="primary"
				onClick={()=>handleShowColumnModal(category)}
				>
				<SettingOutlined />
			</Button>
		</div>
}


export default Header;