import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../@libs/types";
import { ProductService } from "../../../services/product-service";
import { ProductForm } from "./form";

export function ProductEdit() {
  const params = useParams();

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    
    if (params?.id) {
      ProductService.getById(params.id)
        .then(result => {
          setProduct(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <ProductForm product={product} setProduct={setProduct} showForm={true} />
    </>
    
  )
}