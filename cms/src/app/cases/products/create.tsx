import { useState } from "react";
import { IProduct } from "../../../@libs/types";
import { ProductForm } from "./form";

export function ProductCreate() {
  const [product, setProduct] = useState<IProduct>({
    name: '',
    description: '',
    price: 0.0,
    stock: 0 , 
    photo: '' 
  });

  return (
    <ProductForm product={product} setProduct={setProduct}  showForm={true} />    
  )
}