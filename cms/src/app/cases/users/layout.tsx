import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { UserDataGrid } from "./datagrid";

function UserLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/users/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Usuários" />
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

        <UserDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default UserLayout