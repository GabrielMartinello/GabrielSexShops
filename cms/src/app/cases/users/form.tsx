import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IUser } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserService } from "../../../services/user.service";

type UserFormProps = {
  user: IUser;
  setUser: (user: IUser) => void;
  showForm: boolean;
}
export function UserForm({
  user, 
  setUser,
  showForm
}: UserFormProps) {

  const navigate = useNavigate();

  //State - Loading
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true)
    
    if (user.id) {
      UserService.remove(user.id)
        .then(() => {
          navigate('/users');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }
  const handleSave = () => {
    setLoading(true)
    
    if (user.id) {
      UserService.update(user.id, user)
        .then(() => {
          navigate('/users');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    } else {
     UserService.create(user)
        .then(() => {
          navigate('/users');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  }

  return (
    <SideForm 
      open={showForm}
      title="Cadastro de Usuarios"
      onSave={handleSave}
      {...(user.id && { onDelete: handleDelete })}
      loading={loading}
    >
      <TextField
        label="Nome"
        variant="outlined"
        size="small"
        value={user.username || ''}
        onChange={(event) => setUser({ ...user, username: event.target.value })}
        fullWidth
        required
        autoFocus
      />
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        value={user.email || ''}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Senha"
        variant="outlined"
        size="small"
        type="password"
        value={user.password || ''}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
        fullWidth
        required
      />
    </SideForm>
  )
}