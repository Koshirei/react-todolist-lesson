import { createSlice } from '@reduxjs/toolkit';

export interface CategoryInterface {
	id: string;
	name: string;
}

export interface ItemInterface {
	id: string;
	name: string;
	categoryId: string;
}

export const TodoListSlice = createSlice({
    name: 'TodoListSlice',
    initialState: {
        categoryList: [],
		  itemList: [],
		  columnModalVisible: false,
		  itemModalVisible: false,
		  editingColumn: {id: "", name: ""},
		  editingItem: {id: "", name: "", categoryId: ""}
    },
    reducers: {
        AddNewCategoryToList: (state: {categoryList: CategoryInterface[]}, action: { payload: CategoryInterface }) => {
            state.categoryList = [...state.categoryList , action.payload];
        },
		  AddNewItemToList: (state: {itemList: ItemInterface[]}, action:{ payload: ItemInterface }) => {
		  		state.itemList = [...state.itemList, action.payload];
		  },
		  DeleteCategoryById: (state: {categoryList: CategoryInterface[], itemList: ItemInterface[]}, action: { payload: string }) => {
		  		state.itemList = state.itemList.filter((item) => item.categoryId !== action.payload);
				state.categoryList = state.categoryList.filter((category) => category.id !== action.payload);
		  },
		  DeleteItemById: (state: {itemList:ItemInterface[]}, action: { payload: string }) => {
		  		state.itemList = state.itemList.filter((item) => item.id !== action.payload);
		  },
		  ShowColumnModal: (state: {columnModalVisible: boolean, editingColumn: CategoryInterface}, action: {payload: CategoryInterface}) => {
		  		state.editingColumn = action.payload;
				state.columnModalVisible = true;
		  },
		  HideColumnModal: (state: {columnModalVisible: boolean}) => {
		  		state.columnModalVisible = false;
		  },
		  UpdateNewColumnName: (state: {categoryList: CategoryInterface[]}, action: {payload: CategoryInterface}) => {
		  		state.categoryList = state.categoryList.map((category)=>{
					if (category.id === action.payload.id) {
						category.name = action.payload.name;
					}
					return category;
				})
		  }
    },
});

export const { 
	AddNewCategoryToList, 
	AddNewItemToList, 
	DeleteCategoryById, 
	DeleteItemById,
	ShowColumnModal,
	HideColumnModal,
	UpdateNewColumnName
	} = TodoListSlice.actions;

export default TodoListSlice.reducer;
