import React from 'react';

import { CategoryInterface, DeleteCategoryById, ShowColumnModal } from "../../TodoListReduxSlice";

import { Button } from 'antd';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';

interface HeaderInterface {
	category: CategoryInterface,
}

const Header = ({
	category,
}: HeaderInterface) => {

	const dispatch = useDispatch();

	const handleOnClickDeletedCategory = () => {
		dispatch(DeleteCategoryById(category.id));
	}

	const handleShowColumnModal = () => {
		dispatch(ShowColumnModal(category));
	}

	return <div className="main">
		<span className="title">
			{category.name}
		</span>

		<span className='buttons'>
			<Button
				type="primary"
				onClick={handleShowColumnModal}
			>
				<SettingOutlined />
			</Button>

			<Button
				danger
				type="primary"
				onClick={handleOnClickDeletedCategory}
			>
				<CloseOutlined />
			</Button>
		</span>
	</div>
}


export default Header;