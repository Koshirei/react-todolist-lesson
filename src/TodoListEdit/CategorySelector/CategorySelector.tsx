import React from "react";

import { Select } from "antd";
import { CategoryInterface, ItemInterface } from "../TodoListEdit";

export interface CategorySelectorInterface {
    categoryList: CategoryInterface[],
    handleOnChangeSelectedCategory: (categoryID: React.ChangeEvent<HTMLInputElement>) => void,
}

const CategorySelector = ({
    categoryList,
    handleOnChangeSelectedCategory,
}: CategorySelectorInterface) => {

    // étant donné que defaultValue bug et ne veut pas de string,
    // le CategorySelector est le même pour addItem et ItemModal donc
    // je l'ai exporté en un component à part
    // ducoup y'a un petit bug sur la modal mais on peut le régler que avec defaultValue.. qui ne veut pas marcher correctement
    return <Select
        className="input"
        // defaultValue={"test"}
        options={categoryList.map((category: CategoryInterface) => {
            return { value: category.id, label: category.name };
        })}
        onChange={handleOnChangeSelectedCategory}>
    </Select>
}

export default CategorySelector;