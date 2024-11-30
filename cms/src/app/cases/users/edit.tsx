import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../../@libs/types";
import { UserForm } from "./form";
import { UserService } from "../../../services/user.service";

export function UserEdit() {
  const params = useParams();

  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    
    if (params?.id) {
      UserService.getById(params.id)
        .then(result => {
          setUser(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <UserForm user={user} setUser={setUser} showForm={true} />
    </>
    
  )
}