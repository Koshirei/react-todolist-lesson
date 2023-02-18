import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './TodoListReduxStore';
import AddColumn from './AddColumn';
import AddItem from './AddItem';
import Column from './Column';
import ColumnModal from './ColumnModal';

const TodoListRedux = () => {
    return <Provider store={store}>
	 		<AddColumn />
			<AddItem />
			<Column />
			<ColumnModal />
	 </Provider>
};

export default TodoListRedux;
