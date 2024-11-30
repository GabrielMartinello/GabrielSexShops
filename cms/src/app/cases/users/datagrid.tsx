import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Paper } from "@mui/material";
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { IUser } from "../../../@libs/types";

import { toast } from "react-toastify";
import ActionsMenu from "../../components/ui/action-menu";
import { UserService } from "../../../services/user.service";

//Definições das colunas
const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: '#', 
    resizable: false, 
    width: 80 
  },
  { 
    field: 'username', 
    headerName: 'Usuario', 
    resizable: false, 
    flex: 1 
  },
  { 
    field: 'email', 
    headerName: 'E-mail', 
    resizable: false, 
    flex: 1 
  },
  {
    field: 'actions',
    headerName: '', 
    resizable: false,    
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionsMenu
        itemId={params.row.id}
      />
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export function UserDataGrid() {
  const location = useLocation();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    UserService.getAll()
      .then(result => {
        setUsers(result.data)
      })
      .catch(error => toast.error(String(error)))
  }, [location]);

  return (
    <Paper
      sx={{ 
        height: '90%', 
        width: '100%' 
      }}
    >
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  )
}