export interface Location {
  type: string;
  properties: {
    name: string;
    description: string;
    image: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
}

export interface IUser {
  username: string;
  id: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface ResponseApiLogin {
  data: {
    token: string;
  };
}

export interface DecodeToken {
  username: string;
  image: string;
  imageBackup: string;
  id: string;
}
