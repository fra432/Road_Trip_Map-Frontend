export interface Location {
  id: string;
  type: string;
  properties: {
    name: string;
    description: string;
    images: string[];
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
}

export interface NewLocation {
  openLocationForm: boolean;
  coordinates: number[];
}

export interface IUser {
  username: string;
  id: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface ResponseApiLogin {
  status?: number;
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

export interface LocationsState {
  features: Location[];
}
