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
