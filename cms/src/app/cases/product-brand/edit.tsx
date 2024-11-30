import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductBrand } from "../../../@libs/types";
import { ProductBrandService } from "../../../services/product-brand-service";
import { ProductBrandForm } from "./form";

export function ProductBrandEdit() {
  const params = useParams();

  const [brand, setBrand] = useState<IProductBrand>({} as IProductBrand);

  useEffect(() => {
    
    if (params?.id) {
      ProductBrandService.getById(params.id)
        .then(result => {
          setBrand(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <ProductBrandForm brand={brand} setBrand={setBrand} showForm={true} />
    </>
    
  )
}