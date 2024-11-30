import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { ProductBrandDataGrid } from "./datagrid";

function ProductBrandLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/brands/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Marcas" />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'end',
            marginBottom: '1rem'
          }}
        >
          <Button 
            variant="contained"
            onClick={handleCreate}
          >
            <AddIcon />
            Adicionar
          </Button>
        </Box>

        <ProductBrandDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default ProductBrandLayout