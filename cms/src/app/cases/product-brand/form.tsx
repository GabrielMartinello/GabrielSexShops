import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IProductBrand } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { ProductBrandService } from "../../../services/product-brand-service";

type ProductBrandFormProps = {
  brand: IProductBrand;
  setBrand: (brand: IProductBrand) => void;
  showForm: boolean;
}
export function ProductBrandForm({
  brand, 
  setBrand,
  showForm
}: ProductBrandFormProps) {

  const navigate = useNavigate();

  //State - Loading
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true)
    
    if (brand.id) {
      ProductBrandService.remove(brand.id)
        .then(() => {
          navigate('/brands');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }
  const handleSave = () => {
    setLoading(true)
    
    if (brand.id) {
      ProductBrandService.update(brand.id, brand)
        .then(() => {
          navigate('/brands');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    } else {
      ProductBrandService.create(brand)
        .then(() => {
          navigate('/brands');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Marca"
      onSave={handleSave}
      {...(brand.id && { onDelete: handleDelete })}
      loading={loading}
    >
      <TextField
        label="Nome Marca"
        variant="outlined"
        size="small"
        value={brand.name || ''}
        onChange={(event) => setBrand({ ...brand, name: event.target.value })}
        fullWidth
        required
        autoFocus
      />
    </SideForm>
  )
}