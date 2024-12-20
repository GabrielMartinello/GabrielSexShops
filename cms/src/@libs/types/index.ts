  export interface IProductBrand {
      id?: string;
      name: string;
    }
    
  export interface ICategory {
    id?: string;
    name: string;
    description: string;
  }

  export interface IProduct {
    id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    photo: string;
    brands?: IProductBrand[];
    categories?: ICategory[];
  }

  export interface IUser {
      id?: string;           
      username: string;      
      email: string;         
      password?: string;     
      isActive: boolean;
  }