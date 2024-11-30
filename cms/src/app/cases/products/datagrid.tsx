import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Paper } from "@mui/material";
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { IProduct } from "../../../@libs/types";

import { toast } from "react-toastify";
import ActionsMenu from "../../components/ui/action-menu";
import { ProductService } from "../../../services/product-service";

//Definições das colunas
const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: '#', 
    resizable: false, 
    width: 80 
  },
  { 
    field: 'name', 
    headerName: 'Nome do Produto', 
    resizable: false, 
    flex: 1 
  },
  { 
    field: 'description', 
    headerName: 'Descrição do Produto', 
    resizable: false, 
    flex: 1 
  },
  { 
    field: 'price', 
    headerName: 'Preço', 
    resizable: false, 
    flex: 1 
  },
  { 
    field: 'stock', 
    headerName: 'Estoque', 
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

export function ProductDataGrid() {
  const location = useLocation();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.getAll()
      .then(result => {
        setProducts(result.data)
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
        rows={products}
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