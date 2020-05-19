export interface FilterType {
  name: string;
  id: string;
  content: string;
  location: string;
}

export interface FilterStates {
  [key: string]: boolean;
}
