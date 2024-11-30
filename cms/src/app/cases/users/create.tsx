import { useState } from "react";
import { IUser } from "../../../@libs/types";
import { UserForm } from "./form";

export function UserCreate() {
  const [user, setUser] = useState<IUser>({
    username: '',
    email: '',
    password: '',
    isActive: true 
  });

  return (
    <UserForm user={user} setUser={setUser}  showForm={true} />    
  )
}