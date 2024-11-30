import { useNavigate } from "react-router-dom";
import { Stack, TextField, Typography } from "@mui/material";
import { ICategory, IProduct, IProductBrand } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CategoryService } from "../../../services/category.service";
import { MultiSelect } from "../../components/ui/multi-select";
import { ProductService } from "../../../services/product-service";
import { ProductBrandService } from "../../../services/product-brand-service";
import { LoadingButton } from "@mui/lab";
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';

type ProductFormProps = {
  product: IProduct;
  setProduct: (product: IProduct) => void;
  showForm: boolean;
}
export function ProductForm({
  product, 
  setProduct,
  showForm
}: ProductFormProps) {

  const navigate = useNavigate();

  //State - Loading
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [brands, setBrands] = useState<IProductBrand[]>([]);

  const handleDelete = () => {
    setLoading(true)
    
    if (product.id) {
      ProductService.remove(product.id)
        .then(() => {
          navigate('/products');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }
  const handleSave = () => {
    setLoading(true)
    
    if (product.id) {
      ProductService.update(product.id, product)
        .then(() => {
          navigate('/products');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    } else {
      ProductService.create(product)
        .then(() => {
          navigate('/products');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;

    setLoading(true);

    if (files && files[0]) {
      const file = files[0];

      ProductService.upload(file)
        .then(result => {
          if (result.data) {
            const { fullPath } = result.data;
            setProduct({ ...product, photo: fullPath })
          }
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }

  useEffect(() => {
    ProductBrandService.getAll()
      .then(result => {
        setBrands(result.data)
      })

    CategoryService.getAll()
      .then(result => {
        setCategories(result.data)
      })
  }, [])

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Produtos"
      onSave={handleSave}
      {...(product.id && { onDelete: handleDelete })}
      loading={loading}
    >
      <TextField
        label="Nome Produto"
        variant="outlined"
        size="small"
        value={product.name || ''}
        onChange={(event) => setProduct({ ...product, name: event.target.value })}
        fullWidth
        required
        autoFocus
      />

       <TextField
        label="Descrição Produto"
        variant="outlined"
        size="small"
        value={product.description || ''}
        onChange={(event) => setProduct({ ...product, description: event.target.value })}
        fullWidth
        required
        autoFocus
      />

       <TextField
        label="Preço Produto"
        variant="outlined"
        size="small"
        value={product.price || 0}
        onChange={(event) => setProduct({ ...product, price: Number(event.target.value) })}
        fullWidth
        required
        autoFocus
      />

       <TextField
        label="Estoque Produto"
        variant="outlined"
        size="small"
        value={product.stock || 0}
        onChange={(event) => setProduct({ ...product, stock: Number(event.target.value) })}
        fullWidth
        required
        autoFocus
      />

      <MultiSelect
        selected={product.categories || []}
        onChange={(categories) => setProduct({ ...product, categories })}
        items={categories}
        label="Categorias"
      />

      <MultiSelect
        selected={product.brands || []}
        onChange={(brands) => setProduct({ ...product, brands })}
        items={brands}
        label="Marcas"
      />

    <fieldset className="form-fieldset">
        <legend>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0,0,0,0,6)'
            }}
          >
            Foto do Produto
          </Typography>
        </legend>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          gap="1rem"
        >
          {product.photo && (
            <img 
              alt={product.name} 
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${product.photo}`} 
              style={{
                width: '320px'
              }}
            />
          )}
          <LoadingButton
            variant="outlined"
            component="label"
            loading={loading}
          >
            <BackupOutlinedIcon 
              sx={{
                marginRight: '1rem'
              }} 
            />
            Escolher Imagem
            <input type="file" hidden onChange={handleChangeFile} />
          </LoadingButton>
        </Stack>
      </fieldset>
    </SideForm>
  )
}