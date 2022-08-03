export interface Location {
  id: string;
  type: string;
  trip?: string;
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
  name: string;
  tripId: string;
  features: Location[];
}

export interface LocationInfo {
  id: string;
  name: string;
  description?: string;
  images: string[];
}

export interface LocationState {
  infoModalOpen: boolean;
  locationInfo: LocationInfo;
}

export interface ILocationForm {
  name: string;
  description?: string;
  images: string[] | File[];
}

export interface ITrip {
  id?: string;
  name: string;
  image: string;
}

export interface UserTrips {
  userTrips: ITrip[];
  openTripForm: boolean;
}
