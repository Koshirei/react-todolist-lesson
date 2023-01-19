import React, {useState} from 'react';
import "./TodoListBasic.css";

const TodoListBasic = () => {

    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    // old
    // const [todoArray, setTodoArray] = useState<string[]>([]);
    // const [progressingArray, setProgressingArray] = useState<string[]>([]);
    // const [doneArray, setDoneArray] = useState<string[]>([]);
    
    // new
    interface interfaceItem{
        name:string,
        category:string
    }

    const [itemsArray, setItemsArray] = useState<interfaceItem[]>([]);
    const categoryArray = [{
        id:"0", 
        name:"To Do"
    },{
        id:"1",  
        name:"In Progress"
    },{
        id:"2",
        name:"Done"
    }]

    // end of new

    const handleOnChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
	    setName(e.target.value);
    }

    const handleOnChangeCategory = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const handleOnClickAddToList = () => {
        
        // old
        // switch(category){
            // case "todo": setTodoArray([...todoArray, name]); break;
            // case "progressing": setProgressingArray([...progressingArray, name]); break;
            // case "done": setDoneArray([...doneArray, name]); break;
        // }

        // new
        setItemsArray([...itemsArray, {name: name, category: category}]);

        // end of new
    }

    return <div>
        <div className="form">
            <input type="text" onChange={handleOnChangeName} value={name} />

            <select onChange={handleOnChangeCategory}>
                <option value="empty"></option>
                {categoryArray.map((category)=>{
                    return <option value={category.id}>{category.name}</option>
                })}
            </select>

            <button onClick={handleOnClickAddToList}>Add to list</button>
        </div>

        <div className='data'>

            <table>
                <tbody>
                    <tr>
                        {categoryArray.map((category)=>{
                            return <td>{category.name}</td>
                        })}
                    </tr>
                    <tr>

                        {/* // old */}
                        {/* <td>
                            {todoArray.map((todo)=>{
                                return <div key={todo}>{todo}</div>
                            })}
                        </td>

                        <td>
                            {progressingArray.map((progressing)=>{
                                return <div key={progressing}>{progressing}</div>
                            })}
                        </td>

                        <td>
                            {doneArray.map((done)=>{
                                return <div key={done}>{done}</div>
                            })}
                        </td> */}

                        {/* // new */}

                        {categoryArray.map((category)=>{
                            return <td>
                                {itemsArray.filter((item:any)=>{return item.category === category.id})
                                        .map((item:any)=>{
                                            return <div key={item.name}>
                                                    {item.name}
                                                    </div>})
                            }
                            </td>
                        })}
                        
                        {/* end of new */}
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
};

export default TodoListBasic;
