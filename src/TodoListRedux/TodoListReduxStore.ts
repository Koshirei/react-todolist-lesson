import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from './TodoListReduxSlice';

export default configureStore({
    reducer: {
        TodoList: TodoListReducer,
    },
});
