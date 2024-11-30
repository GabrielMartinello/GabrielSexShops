import { useState } from "react";
import { IProductBrand } from "../../../@libs/types";
import { ProductBrandForm } from "./form";

export function ProductBrandCreate() {
  const [brand, setBrand] = useState<IProductBrand>({
    name: ''
  });

  return (
    <ProductBrandForm brand={brand} setBrand={setBrand}  showForm={true} />    
  )
}