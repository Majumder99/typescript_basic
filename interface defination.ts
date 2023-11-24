// type
type TUserType = {
  name: string;
  age: number;
};

// interface
interface IUserType {
  name: string;
  age: number;
}

// now calling one type or interface inside anothers
type TUser = {
  name: string;
  age: number;
  type: TUserType;
};

type TAdmin = TUser & {
  permission: string[];
};

// interface
interface IUser {
  name: string;
  age: number;
  type: IUserType;
}

interface IAdmin extends IUser {
  permission: string[];
}
