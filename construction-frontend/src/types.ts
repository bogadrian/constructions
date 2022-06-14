export interface Company {
  name: string;
  logo: string;
  speciality: string;
  city: string;
}

export interface Checkboxes {
  plumbingCheckbox: boolean;
  plumbingHandleChange: () => void;
  excavationCheckbox: boolean;
  excavationHandleChange: () => void;
  pipingCheckbox: boolean;
  pipingHandleChange: () => void;
  electricalCheckbox: boolean;
  electricalHandleChange: () => void;
  constructionCheckbox: boolean;
  constructionHandleChange: () => void;
  architectureCheckbox: boolean;
  architectureHandleChange: () => void;
}
