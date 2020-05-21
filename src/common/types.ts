export interface FilterType {
  name: string;
  id: string;
  content: any;
  location?: string;
}

export interface FilterStates {
  [key: string]: boolean;
}
