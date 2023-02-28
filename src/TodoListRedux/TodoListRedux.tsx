import { Provider } from 'react-redux';
import store from './TodoListReduxStore';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';

const TodoListRedux = () => {
    return <Provider store={store}>
	 		<AddColumn />
			<AddItem />
			<Column />
			<ColumnModal />
			<ItemModal />
	 </Provider>
};

export default TodoListRedux;
