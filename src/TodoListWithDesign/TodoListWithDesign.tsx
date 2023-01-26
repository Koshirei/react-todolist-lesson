import { Input, Button, Row, Col, Select, List} from 'antd';
import React, {useState} from 'react';
import {CloseOutlined} from '@ant-design/icons';
import './TodoListWithDesign.css';

const TodoListWithDesign = () => {

    const [newColumnName, setNewColumnName] = useState<string>("");
    const [newItemName, setNewItemName] = useState<string>("");
    const [categoryList, setCategoryList] = useState<Category[]>([]);  
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [itemList, setItemList] = useState<Item[]>([]);

    interface Category{
	id: string;
	name:string;
    }
    interface Item{
	id: string;
	name:string;
	categoryId:string;
    }

    const handleOnChangeNewColumnName = (e:React.ChangeEvent<HTMLInputElement>) => {
	
	setNewColumnName(e.target.value);
    }

    const handleOnChangeNewItemName = (e:React.ChangeEvent<HTMLInputElement>) => {	
	setNewItemName(e.target.value);
    }

    const handleOnClickNewColumn = () => {
	if (newColumnName.length>0){
	   setCategoryList([...categoryList, {id: crypto.randomUUID(), name: newColumnName}]);
	   setNewColumnName("");
        }
    }

    const handleOnChangeSelectedCategory = (categoryID:React.ChangeEvent<HTMLInputElement>) => {
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

    return <div className="mainDiv">
	<Row>
	    <Col span={20}>
	        <Input onChange={handleOnChangeNewColumnName} value={newColumnName}></Input>
	    </Col>
	    <Col span={4} className="alignRight">            
		<Button 
		  disabled={!(newColumnName.length>0)}
		  onClick={handleOnClickNewColumn}
		>Add Column</Button>
	    </Col>
	</Row>
	<Row>
	   <Col span={17}>
		<Input onChange={handleOnChangeNewItemName} value={newItemName}></Input>
	   </Col>
	   <Col span={4}>
		<Select
		   className="select"
		   options={categoryList.map((category)=>{
			return {value: category.id, label: category.name};	
		   })}
		   onChange={handleOnChangeSelectedCategory}>
		    
		</Select>
	   </Col>
	   <Col span={3} className="alignRight">
		<Button 
		  disabled={newItemName === "" || selectedCategory === ""}
		  onClick={handleOnClickAddItem}
		>Add Item</Button>
	   </Col>
	</Row>

	{categoryList.map((category)=>{
		return <List
			bordered 
			key={category.id}
			header={<div>{category.name}</div>}
			dataSource={itemList.filter((item)=>{
		  return item.categoryId === category.id
		})}
			renderItem={(item) => (
			<List.Item className="flexItems">
			   	  <span>{item.name}</span>
				  <Button danger type="primary">
					<CloseOutlined />
				  </Button>
			</List.Item>
			)}
			>
		</List>
	})}
    </div>;
};

export default TodoListWithDesign;
