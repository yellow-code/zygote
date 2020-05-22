export interface FilterSettings {
  name: string;
  id: string;
  inputType: string;
  default: any;
}

export interface SettingsStates {
  [key: string]: string;
}

export interface FilterType {
  name: string;
  id: string;
  content: (v: SettingsStates) => string;
  location: string;
  settings: FilterSettings[];
}

export interface FilterStates {
  [key: string]: boolean;
}

export interface GlobalSettingsStates {
  [key: string]: SettingsStates;
}
