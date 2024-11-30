import { useState } from "react";
import { ICategory } from "../../../@libs/types";
import { CategoryForm } from "./form";

export function CategoryCreate() {
  const [category, setCategory] = useState<ICategory>({
    name: '',
    description: ''
  });

  return (
    <CategoryForm category={category} setCategory={setCategory}  showForm={true} />    
  )
}