import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText
          primary="Cadastros" 
        />
        <ListItemButton
          href="/users">
          <ListItemText primary="Usuários" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/brands"
        >
        <ListItemText primary="Marcas" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/categories"
        >
          <ListItemText 
            primary="Categorias de produtos" 
          />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/products"
        >
          <ListItemText primary="Produtos" />
        </ListItemButton>
        <Divider />
      </List>
    </aside>
  )
}

export default SideMenu;